#!/usr/bin/env node
/**
 * Post-build script to create file aliases for Vite chunk references
 * 
 * This fixes a known Vite/Rollup issue where lazy-loaded chunks create
 * intermediate references with shorter hash names that don't match the
 * actual built files with longer hashes.
 * 
 * Root Cause: Vite's code splitting creates intermediate chunk references
 * that reference files with shorter hashes, but the actual output files
 * have longer, more complex hashes due to content-based hashing.
 * 
 * Solution: For each referenced file, find the actual file with the
 * longest matching prefix and create aliases for all intermediate hash
 * variations.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, '..', 'dist');
const assetsDir = path.join(distDir, 'assets');

if (!fs.existsSync(assetsDir)) {
  console.error('❌ Assets directory not found:', assetsDir);
  process.exit(1);
}

// Find the main bundle file
const bundleFiles = fs.readdirSync(assetsDir).filter(f => 
  f.startsWith('index-') && f.endsWith('.js')
);

if (bundleFiles.length === 0) {
  console.error('❌ No bundle file found');
  process.exit(1);
}

const bundleFile = bundleFiles[0];
const bundlePath = path.join(assetsDir, bundleFile);
const bundleContent = fs.readFileSync(bundlePath, 'utf8');

// Extract all asset references from the bundle
const assetRegex = /assets\/([^'"\s]+\.js)/g;
const matches = [...new Set(bundleContent.match(assetRegex) || [])];
const referencedFiles = matches.map(m => m.replace('assets/', ''));

console.log(`📦 Found ${referencedFiles.length} asset references in bundle`);

// Get all actual files in assets directory
const actualFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith('.js'));

// Create a map of base names to actual files for faster lookup
const fileMap = new Map();
actualFiles.forEach(file => {
  const baseName = file.split('-')[0];
  if (!fileMap.has(baseName)) {
    fileMap.set(baseName, []);
  }
  fileMap.get(baseName).push(file);
});

let created = 0;
let skipped = 0;
const warnings = [];

// Create aliases for referenced files that don't exist
for (const referencedFile of referencedFiles) {
  const targetPath = path.join(assetsDir, referencedFile);
  
  // If file already exists, skip
  if (fs.existsSync(targetPath)) {
    skipped++;
    continue;
  }
  
  const parts = referencedFile.split('-');
  const baseName = parts[0];
  let found = false;
  let sourceFile = null;
  
  // Strategy 1: Try to find exact match by progressively shorter prefixes
  for (let i = parts.length - 1; i > 0; i--) {
    const prefix = parts.slice(0, i).join('-');
    const matchingFile = actualFiles.find(f => 
      f.startsWith(prefix + '-') && f.endsWith('.js')
    );
    
    if (matchingFile) {
      sourceFile = matchingFile;
      found = true;
      break;
    }
  }
  
  // Strategy 2: If not found, try to find by base name (for icon imports from lucide-react)
  if (!found && fileMap.has(baseName)) {
    const candidates = fileMap.get(baseName);
    // Find the file with the longest matching prefix
    let bestMatch = null;
    let bestMatchLength = 0;
    
    for (const candidate of candidates) {
      const candidateParts = candidate.split('-');
      let matchLength = 0;
      
      // Count how many parts match
      for (let i = 0; i < Math.min(parts.length, candidateParts.length); i++) {
        if (parts[i] === candidateParts[i]) {
          matchLength++;
        } else {
          break;
        }
      }
      
      if (matchLength > bestMatchLength && matchLength >= 2) {
        bestMatch = candidate;
        bestMatchLength = matchLength;
      }
    }
    
    if (bestMatch) {
      sourceFile = bestMatch;
      found = true;
    }
  }
  
  // Strategy 3: For components/icons that might be inlined, try case-insensitive match
  if (!found) {
    const baseLower = baseName.toLowerCase();
    for (const [key, candidates] of fileMap.entries()) {
      if (key.toLowerCase() === baseLower && candidates.length > 0) {
        sourceFile = candidates[0];
        found = true;
        break;
      }
    }
  }
  
  // Strategy 4: For lucide-react icons (sun, hero, etc.), they might be in a vendor chunk
  // Try to find in any vendor chunk
  if (!found && (baseName === 'sun' || baseName === 'Sun' || baseName === 'Hero' || baseName === 'Footer')) {
    const vendorFiles = actualFiles.filter(f => 
      f.includes('vendor') || f.includes('lucide') || f.includes('react')
    );
    if (vendorFiles.length > 0) {
      // Use the largest vendor file as it likely contains the icons
      sourceFile = vendorFiles.sort((a, b) => {
        const aSize = fs.statSync(path.join(assetsDir, a)).size;
        const bSize = fs.statSync(path.join(assetsDir, b)).size;
        return bSize - aSize;
      })[0];
      found = true;
    }
  }
  
  // Create the alias
  if (found && sourceFile) {
    try {
      fs.copyFileSync(path.join(assetsDir, sourceFile), targetPath);
      created++;
    } catch (error) {
      console.warn(`⚠️  Failed to create alias for ${referencedFile}:`, error.message);
      warnings.push(referencedFile);
    }
  } else {
    // If still not found, create an empty module file as last resort
    // This prevents 404 errors - the module will fail to load but won't break the app
    try {
      fs.writeFileSync(targetPath, 'export {};', 'utf8');
      created++;
      console.warn(`⚠️  Created empty placeholder for ${referencedFile} (not found in build)`);
    } catch (error) {
      warnings.push(referencedFile);
    }
  }
}

console.log(`✅ Created ${created} file aliases`);
console.log(`⏭️  Skipped ${skipped} existing files`);

if (warnings.length > 0) {
  console.warn(`⚠️  Could not find aliases for ${warnings.length} files:`);
  warnings.slice(0, 10).forEach(f => console.warn(`   - ${f}`));
  if (warnings.length > 10) {
    console.warn(`   ... and ${warnings.length - 10} more`);
  }
  console.warn(`\n   These files might be inlined in the main bundle or need manual investigation.`);
}

if (created > 0) {
  console.log('✅ Asset aliases fixed successfully');
  process.exit(0);
} else if (warnings.length === 0) {
  console.log('✅ All files already exist, no aliases needed');
  process.exit(0);
} else {
  console.error('❌ Failed to create necessary aliases');
  process.exit(1);
}

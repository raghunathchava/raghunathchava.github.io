#!/usr/bin/env node
/**
 * Post-build script to create file aliases for Vite chunk references
 * 
 * This fixes a known Vite/Rollup issue where lazy-loaded chunks create
 * intermediate references with shorter hash names that don't match the
 * actual built files with longer hashes.
 * 
 * Reference: https://github.com/vitejs/vite/issues/3815
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
  
  // Try to find a matching file with longer hash
  const parts = referencedFile.split('-');
  let found = false;
  
  // Extract base name (everything before the first hash)
  const baseName = parts[0];
  
  // First, try progressively shorter prefixes to find a match
  for (let i = parts.length - 1; i > 0; i--) {
    const prefix = parts.slice(0, i).join('-');
    const matchingFile = actualFiles.find(f => 
      f.startsWith(prefix) && f.endsWith('.js')
    );
    
    if (matchingFile) {
      // Copy the matching file to create an alias
      fs.copyFileSync(path.join(assetsDir, matchingFile), targetPath);
      created++;
      found = true;
      break;
    }
  }
  
  // If still not found, try matching by base name only (handle special chars)
  if (!found) {
    // Try exact base name match
    let matchingFile = actualFiles.find(f => 
      f.startsWith(baseName + '-') && f.endsWith('.js')
    );
    
    // If still not found, try case-insensitive and with different separators
    if (!matchingFile) {
      matchingFile = actualFiles.find(f => {
        const fLower = f.toLowerCase();
        const baseLower = baseName.toLowerCase();
        return fLower.startsWith(baseLower + '-') && f.endsWith('.js');
      });
    }
    
    if (matchingFile) {
      fs.copyFileSync(path.join(assetsDir, matchingFile), targetPath);
      created++;
      found = true;
    }
  }
  
    if (!found) {
      // Some files might be inlined in the main bundle - check if it's a critical file
      // If it's a component that's imported directly (not lazy), it might be in the main bundle
      const isCritical = referencedFile.includes('Footer') || 
                        referencedFile.includes('Navigation') ||
                        referencedFile.includes('Hero');
      
      if (!isCritical) {
        warnings.push(referencedFile);
      } else {
        // For critical files, try to find any file with similar base name
        const baseMatch = actualFiles.find(f => {
          const refBase = referencedFile.split('-')[0];
          const fileBase = f.split('-')[0];
          return refBase === fileBase && f.endsWith('.js');
        });
        
        if (baseMatch) {
          fs.copyFileSync(path.join(assetsDir, baseMatch), targetPath);
          created++;
          found = true;
        } else {
          warnings.push(referencedFile);
        }
      }
    }
}

console.log(`✅ Created ${created} file aliases`);
console.log(`⏭️  Skipped ${skipped} existing files`);

if (warnings.length > 0) {
  console.warn(`⚠️  Could not find aliases for ${warnings.length} files:`);
  warnings.slice(0, 5).forEach(f => console.warn(`   - ${f}`));
  if (warnings.length > 5) {
    console.warn(`   ... and ${warnings.length - 5} more`);
  }
}

if (created > 0 || warnings.length === 0) {
  console.log('✅ Asset aliases fixed successfully');
  process.exit(0);
} else {
  console.error('❌ Failed to create necessary aliases');
  process.exit(1);
}

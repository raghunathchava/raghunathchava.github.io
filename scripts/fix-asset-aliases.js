#!/usr/bin/env node
/**
 * Post-build script to create file aliases for Vite chunk references
 * This fixes 404 errors caused by Vite's code splitting creating intermediate chunk references
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, '..', 'dist');
const assetsDir = path.join(distDir, 'assets');

if (!fs.existsSync(assetsDir)) {
  console.error('Assets directory not found:', assetsDir);
  process.exit(1);
}

// Find the main bundle file
const bundleFiles = fs.readdirSync(assetsDir).filter(f => 
  f.startsWith('index-') && f.endsWith('.js')
);

if (bundleFiles.length === 0) {
  console.error('No bundle file found');
  process.exit(1);
}

const bundleFile = bundleFiles[0];
const bundlePath = path.join(assetsDir, bundleFile);
const bundleContent = fs.readFileSync(bundlePath, 'utf8');

// Extract all asset references from the bundle
const assetRegex = /assets\/([^'"\s]+\.js)/g;
const matches = [...new Set(bundleContent.match(assetRegex) || [])];
const referencedFiles = matches.map(m => m.replace('assets/', ''));

console.log(`Found ${referencedFiles.length} asset references in bundle`);

// Get all actual files in assets directory
const actualFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith('.js'));

let created = 0;
let skipped = 0;

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
  
  // Try progressively shorter prefixes to find a match
  for (let i = parts.length - 1; i > 0; i--) {
    const prefix = parts.slice(0, i).join('-');
    const matchingFile = actualFiles.find(f => 
      f.startsWith(prefix) && f.endsWith('.js')
    );
    
    if (matchingFile) {
      // Copy the matching file to create an alias
      const sourcePath = path.join(assetsDir, matchingFile);
      fs.copyFileSync(sourcePath, targetPath);
      created++;
      found = true;
      break;
    }
  }
  
  if (!found) {
    console.warn(`⚠️  Could not find alias for: ${referencedFile}`);
  }
}

console.log(`✅ Created ${created} file aliases`);
console.log(`⏭️  Skipped ${skipped} existing files`);

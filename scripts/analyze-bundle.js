#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Analyzing bundle size...\n');

try {
  // Clean previous build
  console.log('🧹 Cleaning previous build...');
  execSync('rm -rf .next', { stdio: 'inherit' });
  
  // Build with analyzer
  console.log('📦 Building with bundle analyzer...');
  execSync('ANALYZE=true bun run build', { stdio: 'inherit' });
  
  // Check if report was generated
  const reportPath = path.join(__dirname, '../reports/bundle-analyzer.html');
  if (fs.existsSync(reportPath)) {
    console.log('\n✅ Bundle analysis complete!');
    console.log(`📊 Report generated at: ${reportPath}`);
    console.log('\n💡 To view the report:');
    console.log(`   open ${reportPath}`);
  } else {
    console.log('\n⚠️  Bundle analyzer report not found');
  }
  
} catch (error) {
  console.error('\n❌ Error during bundle analysis:', error.message);
  process.exit(1);
}

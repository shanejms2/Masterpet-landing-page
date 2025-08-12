#!/usr/bin/env node

/**
 * Script to check cache headers for video files
 * Run with: node scripts/check-cache-headers.js
 */

const https = require('https');
const http = require('http');

const videoFiles = [
  'Hungry%20Cochin.mp4',
  'Bipin%20Shoot%20Cat%20v2%20(1).mp4',
  'Bipin%20ASMR.mp4',
  'Tattoo%20Artist.mp4',
  'Masterpet%20Animated.mp4',
  'othalanga%20facial%20for%20Bella.mp4',
  'pomeranian%20grooming.mp4',
  'pug%20grooming.mp4',
  'Puppy,%20a%20beagle%20video%20copy%202.mp4',
  'Tessa%20Grooming%202.mp4',
  'grooming%20truck.mp4',
  'dashund%20grooming.mp4'
];

const baseUrl = 'https://obyaomptxztycjjakykm.supabase.co/storage/v1/object/public/masterpet-landingpage-videos';

function checkHeaders(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    
    client.get(url, { method: 'HEAD' }, (res) => {
      const headers = res.headers;
      const cacheControl = headers['cache-control'] || 'Not set';
      const contentLength = headers['content-length'] || 'Unknown';
      const contentType = headers['content-type'] || 'Unknown';
      
      resolve({
        url,
        statusCode: res.statusCode,
        cacheControl,
        contentLength: parseInt(contentLength) || 0,
        contentType,
        headers: headers
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function main() {
  console.log('🔍 Checking cache headers for video files...\n');
  
  const results = [];
  let totalSize = 0;
  
  for (const file of videoFiles) {
    try {
      const url = `${baseUrl}/${file}`;
      const result = await checkHeaders(url);
      results.push(result);
      totalSize += result.contentLength;
      
      // Format file size
      const sizeInMB = (result.contentLength / (1024 * 1024)).toFixed(2);
      
      console.log(`📹 ${file}`);
      console.log(`   URL: ${url}`);
      console.log(`   Size: ${sizeInMB} MB`);
      console.log(`   Cache-Control: ${result.cacheControl}`);
      console.log(`   Status: ${result.statusCode}`);
      console.log('');
      
    } catch (error) {
      console.error(`❌ Error checking ${file}:`, error.message);
    }
  }
  
  // Summary
  console.log('📊 SUMMARY');
  console.log('==========');
  console.log(`Total files: ${results.length}`);
  console.log(`Total size: ${(totalSize / (1024 * 1024)).toFixed(2)} MB`);
  
  const filesWithShortCache = results.filter(r => {
    const cache = r.cacheControl.toLowerCase();
    return cache.includes('max-age=3600') || cache.includes('max-age=1800') || cache === 'not set';
  });
  
  console.log(`Files with short cache (< 1 day): ${filesWithShortCache.length}`);
  
  if (filesWithShortCache.length > 0) {
    console.log('\n⚠️  RECOMMENDATIONS:');
    console.log('==================');
    console.log('1. Configure Supabase Storage bucket with longer cache headers');
    console.log('2. Use the video proxy API route we created (/api/proxy-video/*)');
    console.log('3. Set cache headers to: "public, max-age=31536000, immutable" (1 year)');
    console.log('4. Consider using a CDN like Cloudflare for better caching');
  }
  
  console.log('\n✅ Video proxy API route is ready at: /api/proxy-video/[filename]');
  console.log('   This will serve videos with proper 1-year cache headers.');
}

main().catch(console.error);

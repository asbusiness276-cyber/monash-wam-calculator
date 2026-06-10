/**
 * Generate PNG + ICO favicons from public/favicon.svg for Google Search / browsers.
 * Run: npm run generate-favicons
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = join(root, 'public');
const svgPath = join(publicDir, 'favicon.svg');
const svg = readFileSync(svgPath);

async function writePng(size, filename) {
  await sharp(svg).resize(size, size).png().toFile(join(publicDir, filename));
}

await writePng(48, 'favicon-48x48.png');
await writePng(96, 'favicon-96x96.png');
await writePng(192, 'favicon-192x192.png');
await writePng(180, 'apple-touch-icon.png');
await sharp(svg).resize(48, 48).png().toFile(join(publicDir, 'favicon.png'));

const icoBuffer = await pngToIco([
  join(publicDir, 'favicon-48x48.png'),
  join(publicDir, 'favicon-96x96.png'),
]);

writeFileSync(join(publicDir, 'favicon.ico'), icoBuffer);

console.log('Generated favicon.ico, favicon.png, favicon-48x48.png, favicon-96x96.png, favicon-192x192.png, apple-touch-icon.png');

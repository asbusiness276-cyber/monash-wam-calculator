/**
 * Compress a blog featured image to 1280×720 WebP for /public/article-images/.
 *
 * Usage (from repo root):
 *   node scripts/compress-featured-image.mjs featured-my-slug.jpg
 *   node scripts/compress-featured-image.mjs path/to/source.png
 *
 * Output: public/article-images/{basename}.webp (removes same-name .jpg/.png if present)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const inputArg = process.argv[2];
if (!inputArg) {
  console.error('Usage: node scripts/compress-featured-image.mjs <filename-or-path>');
  process.exit(1);
}

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const inputPath = path.isAbsolute(inputArg)
  ? inputArg
  : fs.existsSync(path.join(repoRoot, inputArg))
    ? path.join(repoRoot, inputArg)
    : path.join(repoRoot, 'public', 'article-images', inputArg);

if (!fs.existsSync(inputPath)) {
  console.error(`File not found: ${inputPath}`);
  process.exit(1);
}

const base = path.basename(inputPath, path.extname(inputPath));
const outDir = path.join(repoRoot, 'public', 'article-images');
const outPath = path.join(outDir, `${base}.webp`);
const tempPath = path.join(outDir, `${base}.webp.tmp`);

await sharp(inputPath)
  .resize(1280, 720, { fit: 'cover', position: 'centre' })
  .webp({ quality: 82 })
  .toFile(tempPath);

if (fs.existsSync(outPath)) {
  fs.unlinkSync(outPath);
}
fs.renameSync(tempPath, outPath);

const outKb = Math.round(fs.statSync(outPath).length / 1024);
console.log(`Wrote ${outPath} (${outKb} KB)`);

if (path.resolve(inputPath) !== path.resolve(outPath)) {
  for (const ext of ['.jpg', '.jpeg', '.png']) {
    const heavy = path.join(outDir, `${base}${ext}`);
    if (fs.existsSync(heavy)) {
      fs.unlinkSync(heavy);
      console.log(`Removed ${heavy}`);
    }
  }
}

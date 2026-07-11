/**
 * Compress homepage illustrations to WebP in /public/home/.
 *
 * Usage: node scripts/compress-home-images.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const assetsDir =
  'C:\\Users\\Hp\\.cursor\\projects\\c-Users-Hp-monash-wam-calculator\\assets';
const outDir = path.join(repoRoot, 'public', 'home');

/** Source filename suffix → output basename */
const IMAGE_MAP = {
  'image-4a4d353e-2a59-490c-bcdc-f6ea7a2872d0.png': 'hero',
  'image-957faea1-7964-4858-b33d-9f173b3cd056.png': 'search-workspace',
  'image-a73a8f3d-d6b3-4fee-90b1-b72c29afbd45.png': 'wam-calculator',
  'image-fcfa977a-876b-410a-89e9-02db35f97b3f.png': 'step-enter-marks',
  'image-fcb88174-5735-418f-b65c-9637dd096b59.png': 'step-add-subjects',
  'image-13f4dc8f-19ff-414d-a182-d4d726da1e5b.png': 'step-instant-wam',
  'image-fe9ae5f8-a82e-46e9-8fd7-f3144bc2e875.png': 'step-view-results',
  'image-357f01e8-6cfa-4c71-a0bc-a24de4009e88.png': 'why-accurate',
  'image-6592573c-02f9-41ad-87d6-addbf75be5ca.png': 'why-fast',
  'image-211a23fb-1dc5-4f09-84b4-c8ebf443b1b6.png': 'why-secure',
  'image-1af6f5dd-3ead-400f-8ee0-ef5edd662cd6.png': 'why-free',
  'image-508a226c-8d1f-44e9-b5d0-3dcd8366c807.png': 'calc-wam-to-gpa',
  'image-afddc9a5-e3b3-44e3-9197-bb25447e2505.png': 'calc-gpa-to-wam',
  'image-0c4dcc50-b0f6-45c5-860d-73c42897bc86.png': 'calc-target-wam',
  'image-d48e6bd9-9f55-46b2-ac80-2074d04ec3cf.png': 'calc-semester-wam',
  'image-a62abea9-f629-4f24-8b21-f55bcda81906.png': 'calc-honours',
  'image-6c77a7a1-abd7-4dac-9616-7e6eaa927403.png': 'calc-grade-predictor',
};

const MAX_WIDTH = {
  hero: 1400,
  default: 960,
  card: 640,
};

fs.mkdirSync(outDir, { recursive: true });

const manifest = {};

for (const [filename, basename] of Object.entries(IMAGE_MAP)) {
  const inputPath = path.join(assetsDir, `c__Users_Hp_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_${filename}`);

  if (!fs.existsSync(inputPath)) {
    console.error(`Missing source: ${inputPath}`);
    process.exit(1);
  }

  const meta = await sharp(inputPath).metadata();
  const maxW = basename === 'hero' ? MAX_WIDTH.hero : basename.startsWith('calc-') || basename.startsWith('why-') ? MAX_WIDTH.card : MAX_WIDTH.default;

  const pipeline = sharp(inputPath);
  if (meta.width && meta.width > maxW) {
    pipeline.resize(maxW, null, { fit: 'inside', withoutEnlargement: true });
  }

  const outPath = path.join(outDir, `${basename}.webp`);
  const tempPath = `${outPath}.tmp`;

  await pipeline.webp({ quality: 82, effort: 4 }).toFile(tempPath);

  if (fs.existsSync(outPath)) fs.unlinkSync(outPath);
  fs.renameSync(tempPath, outPath);

  const outMeta = await sharp(outPath).metadata();
  const outKb = Math.round(fs.statSync(outPath).size / 1024);
  manifest[basename] = { width: outMeta.width, height: outMeta.height, src: `/home/${basename}.webp` };
  console.log(`Wrote ${basename}.webp (${outMeta.width}x${outMeta.height}, ${outKb} KB)`);
}

fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2));
console.log('Wrote manifest.json');

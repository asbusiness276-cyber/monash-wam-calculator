import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const outDir = path.join(root, 'public', 'author');

async function makePassportAvatar(input, outBase) {
  const meta = await sharp(input).metadata();
  const { width = 0, height = 0 } = meta;

  const baseLeft = Math.round(width * 0.22);
  const baseTop = Math.round(height * 0.08);
  const baseSize = Math.min(width - baseLeft, height - baseTop, Math.round(Math.min(width, height) * 0.78));

  // Subject sits lower-left inside the full-body frame; passport crop on head + shoulders.
  const faceCenterX = baseLeft + Math.round(baseSize * 0.18);
  const faceCenterY = baseTop + Math.round(baseSize * 0.72);
  const cropSize = Math.round(baseSize * 0.44);
  const left = Math.max(0, Math.min(faceCenterX - Math.round(cropSize / 2), width - cropSize));
  const top = Math.max(0, Math.min(faceCenterY - Math.round(cropSize * 0.36), height - cropSize));

  const jpgPath = path.join(outDir, `${outBase}.jpg`);
  const webpPath = path.join(outDir, `${outBase}.webp`);
  const tmpPath = path.join(outDir, `${outBase}.tmp.jpg`);

  await sharp(input)
    .extract({ left, top, width: cropSize, height: cropSize })
    .resize(640, 640, { fit: 'cover', position: 'centre' })
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(tmpPath);

  await sharp(tmpPath).toFile(jpgPath);
  await sharp(jpgPath).webp({ quality: 88 }).toFile(webpPath);
  await fs.unlink(tmpPath);

  console.log(`Created ${outBase}: crop ${cropSize}px at (${left},${top})`);
}

const source =
  process.argv[2] ||
  'C:/Users/Hp/.cursor/projects/c-Users-Hp-monash-wam-calculator/assets/c__Users_Hp_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-07-09_at_11.06.05_AM-2b643035-6649-4e85-8d25-47a26a4a33ae.png';

await makePassportAvatar(source, 'saahil');

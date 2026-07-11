const { join } = require('path');

/**
 * Keep the downloaded Chromium inside the project so Vercel's build cache
 * (which persists node_modules and the working directory cache) can reuse it
 * across deploys instead of re-downloading on every build.
 * @type {import('puppeteer').Configuration}
 */
module.exports = {
  cacheDirectory: join(__dirname, 'node_modules', '.cache', 'puppeteer'),
};

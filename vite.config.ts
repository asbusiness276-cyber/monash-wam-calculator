import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) {
            if (
              id.includes('/src/data/articles.ts') ||
              id.includes('bestUniversitiesAustraliaArticle') ||
              id.includes('bestPharmacyUniversitiesAustraliaArticle') ||
              id.includes('bestEconomicsUniversitiesAustraliaArticle')
            ) {
              return 'articles-data';
            }
            return;
          }

          if (id.includes('react-dom') || id.includes('/react/')) {
            return 'vendor-react';
          }
          if (id.includes('lucide-react')) {
            return 'vendor-icons';
          }
        },
      },
    },
  },
})

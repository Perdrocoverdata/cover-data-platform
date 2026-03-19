import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: true
    })
  ],
  adapter: netlify({
    devFeatures: {
      environmentVariables: true
    }
  })
});

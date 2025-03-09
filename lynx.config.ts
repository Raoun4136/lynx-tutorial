import { defineConfig } from '@lynx-js/rspeedy';

import { pluginQRCode } from '@lynx-js/qrcode-rsbuild-plugin';
import { pluginReactLynx } from '@lynx-js/react-rsbuild-plugin';
import { pluginSass } from '@rsbuild/plugin-sass';

export default defineConfig({
  source: {
    entry: {
      FirstImageCard: './src/FirstImageCard/index.tsx',
      // LikeImageCard: './src/LikeImageCard/index.tsx',
      CreateGallery: './src/CreateGallery/index.tsx',
      AddAutoScroll: './src/AddAutoScroll/index.tsx',
      AddNiceScrollbar: './src/AddNiceScrollbar/index.tsx',
      // ScrollbarCompare: './src/ScrollbarCompare/index.tsx',
      // GalleryComplete: './src/GalleryComplete/index.tsx',
    },
  },
  plugins: [
    pluginQRCode({
      schema(url) {
        // We use `?fullscreen=true` to open the page in LynxExplorer in full screen mode
        return `${url}?fullscreen=true`;
      },
    }),
    pluginReactLynx(),
    pluginSass(),
  ],
});

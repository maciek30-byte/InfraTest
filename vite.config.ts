import react from '@vitejs/plugin-react';
import packageJson from './package.json';
import {defineConfig} from "vite";

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    emptyOutDir: true,
    sourcemap: true
  },
  define : {
    __APP_VERSION__: JSON.stringify(packageJson.version)
  }
});

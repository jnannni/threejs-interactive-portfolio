import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.gltf', '**/*.glb'],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@loader": path.resolve(__dirname, "src/loader"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@3d_components": path.resolve(__dirname, "src/3d_components"),
    }
  }
})

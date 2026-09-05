import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/shirisha_protfolio/',
  server: {
    port: 3000,
    open: false
  }
});

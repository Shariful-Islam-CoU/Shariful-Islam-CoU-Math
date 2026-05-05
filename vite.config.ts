import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0', // Bind to all network interfaces
    port: parseInt(process.env.PORT as string) || 3000, // Use Render's PORT or default to 3000
    allowedHosts: ['shariful-islam-cou-math.onrender.com'], // Allow this host
  },
  plugins: [react(), tailwindcss()],
  define: {
    'process.env.GEMINI_API_KEY': JSON.stringify(process.env.GEMINI_API_KEY),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});

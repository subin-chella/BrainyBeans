import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/BrainyBeans/',
  plugins: [
    react(),
    // Custom plugin to handle /data/ requests
    {
      name: 'block-data-requests',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
         if ((req as any).url?.startsWith('/data/')) {
            res.statusCode = 404;
            res.end('Not found');
            return;
          }
          next();
        });
      },
    },
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
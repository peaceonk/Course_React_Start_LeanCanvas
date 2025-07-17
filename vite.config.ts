import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'), // components 기준으로 절대경로 import 허용
      '@types': path.resolve(__dirname, 'src/app-types'),
      // 다른 alias도 여기에 추가 가능
    },
  },
});

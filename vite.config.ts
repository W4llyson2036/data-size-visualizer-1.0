import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // Configura o diretório de saída
    rollupOptions: {
      input: './index.html', // Ponto de entrada principal
    },
  },
});
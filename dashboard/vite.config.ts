import { defineConfig, loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { reactRouter } from '@react-router/dev/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
    define: {
      __FAVICON__: JSON.stringify('/favicon.png'),
    },
    server: {
      port: parseInt(env.VITE_PORT) || 5173,
    },
  };
});

import vercelBuild from '@hono/vite-build/vercel'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vercelBuild({
      entry: './src/api.ts',
      minify: false,
      vercel: {
        name: 'api',
        function: {
          shouldAddHelpers: false,
          maxDuration: 10,
        },
      },
    }),
    vercelBuild({
      entry: './src/auth.ts',
      minify: false,
      vercel: {
        name: 'auth',
        function: {
          shouldAddHelpers: false,
          maxDuration: 30,
        },
      },
    }),
  ],
})

import vercelBuild from '@hono/vite-build/vercel'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vercelBuild({
      minify: false,
      vercel: {
        function: {
          shouldAddHelpers: false,
          maxDuration: 10,
        },
        functions: [
          {
            name: 'api',
            entry: './src/api.ts',
          },
          {
            name: 'auth',
            entry: './src/auth.ts',
            function: {
              maxDuration: 30,
            },
          },
        ],
      },
    }),
  ],
})

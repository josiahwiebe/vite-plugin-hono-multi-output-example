# Multi Output Sample

This sample shows how to configure `@hono/vite-build/vercel` to emit multiple Vercel functions
with multiple plugin instances.

The `vite.config.ts` intentionally omits `vercel.routes` so the adapter uses its default route
generation (`^/<function-name>(?:/.*)?$`).

## Build

```bash
npm install
npm run build
```

Expected output:

- `.vercel/output/functions/api.func/index.js`
- `.vercel/output/functions/auth.func/index.js`
- `.vercel/output/config.json` with route mappings for `/api` and `/auth`

This sample pins `@hono/vite-build` to a packed tarball (`hono-vite-build-1.10.1.tgz`) so it does not rely on `../packages/build` at install time.

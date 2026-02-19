import { Hono } from 'hono'

const app = new Hono()

app.get('/auth', (c) => {
  return c.json({
    service: 'auth',
    ok: true,
  })
})

app.post('/auth/token', async (c) => {
  const body = await c.req.json().catch(() => ({}))

  return c.json({
    service: 'auth',
    token: 'sample-token',
    body,
  })
})

export default app

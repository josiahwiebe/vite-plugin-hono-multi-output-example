import { Hono } from 'hono'

const app = new Hono()

app.get('/api', (c) => {
  return c.json({
    service: 'api',
    ok: true,
  })
})

app.get('/api/health', (c) => {
  return c.json({
    service: 'api',
    status: 'healthy',
  })
})

export default app

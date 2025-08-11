# Portfolio Backend (Contact form -> Resend)

Small Express backend to receive contact form submissions from your React portfolio
and forward them to your email using **Resend**.

## Features
- Single endpoint `POST /contact` to receive `{ name, email, message }`
- Sends an HTML email via Resend
- CORS configured to accept only your frontend origin
- Basic validation to prevent empty submissions

## Quick start
1. Install dependencies
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and fill your keys
   ```bash
   cp .env.example .env
   ```
3. Start dev server
   ```bash
   npm run dev
   ```
4. Connect your React frontend to `http://localhost:5000/contact`

## Environment variables
- `PORT` — port for the server (default 5000)
- `RESEND_API_KEY` — your Resend API key
- `RECEIVER_EMAIL` — email that will receive messages
- `FRONTEND_URL` — your frontend origin for CORS

## Example frontend fetch
```js
await fetch('http://localhost:5000/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, message })
});
```

## Security & production notes
- Keep `.env` out of git.
- Validate and sanitize incoming data in production.
- Add rate-limiting or captcha if you receive spam.
- Consider deploying on Render / Railway / Fly.io / Vercel (server) or use serverless functions.

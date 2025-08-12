import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Liste des origines autorisées
const allowedOrigins = [
  'https://portfolio-fullstack-umber.vercel.app',
  'https://portfolio-fullstack-git-main-joshua-nzuzis-projects.vercel.app',
  'https://portfolio-fullstack-m0zlk6hud-joshua-nzuzis-projects.vercel.app',
  'https://portfolio-fullstack-n7ozqx48l-joshua-nzuzis-projects.vercel.app', // <== NOUVEAU DOMAINE AJOUTÉ
  'http://localhost:3000',
];

if (!process.env.RESEND_API_KEY) {
  console.warn('⚠️ RESEND_API_KEY not set. Email sending will fail.');
}
if (!process.env.RECEIVER_EMAIL) {
  console.warn('⚠️ RECEIVER_EMAIL not set. Set it in .env to receive messages.');
}

const resend = new Resend(process.env.RESEND_API_KEY);

app.use(express.json({ limit: '10kb' }));

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // Autoriser requêtes sans origin
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error(`The CORS policy for this site does not allow access from the specified Origin: ${origin}`), false);
    },
  })
);

app.get('/', (req, res) => res.json({ status: 'ok', service: 'portfolio-backend' }));

function escapeHtml(unsafe) {
  return String(unsafe)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

app.post('/contact', async (req, res) => {
  try {
    console.log('Reçu backend:', req.body);
    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'name, email and message are required' });
    }
    if (message.length > 2000) {
      return res.status(400).json({ error: 'message too long' });
    }

    const emailSubject = subject
      ? `Nouveau message de ${name} via portfolio – ${subject}`
      : `Nouveau message de ${name} via portfolio`;

    const to = process.env.RECEIVER_EMAIL;

    const html = `
      <h3>Nouveau message depuis le portfolio</h3>
      <p><strong>Nom:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Projet:</strong> ${escapeHtml(subject || 'Non spécifié')}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
    `;

    const resp = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to,
      subject: emailSubject,
      html,
    });

    return res.json({ ok: true, id: resp.id || null });
  } catch (err) {
    console.error('Error /contact', err);
    return res.status(500).json({ error: 'internal_error' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ portfolio-backend listening on http://0.0.0.0:${PORT}`);
});

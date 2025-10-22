// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import { Resend } from 'resend';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// const allowedOrigins = [
//   'https://portfolio-fullstack-umber.vercel.app',
//   'https://portfolio-fullstack-git-main-joshua-nzuzis-projects.vercel.app',
//   'https://portfolio-fullstack-m0zlk6hud-joshua-nzuzis-projects.vercel.app',
//   'https://portfolio-fullstack-n7ozqx48l-joshua-nzuzis-projects.vercel.app',
//   'http://localhost:3000',
// ];

// // 1️⃣ CORS configuré sans throw d’erreur
// app.use(cors({
//   origin: (origin, callback) => {
//     if (!origin) return callback(null, true); // requêtes sans Origin (Postman, SSR…)
//     if (allowedOrigins.includes(origin)) {
//       return callback(null, true);
//     }
//     console.warn(`❌ Origin refusée: ${origin}`);
//     return callback(null, false); // pas d'exception -> évite 500
//   },
//   methods: ['GET', 'POST', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));

// // 2️⃣ Fallback manuel pour toutes les requêtes OPTIONS
// app.options('*', (req, res) => {
//   const origin = req.headers.origin;
//   if (allowedOrigins.includes(origin)) {
//     res.header('Access-Control-Allow-Origin', origin);
//   }
//   res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
//   return res.sendStatus(204);
// });

// app.use(express.json({ limit: '10kb' }));

// if (!process.env.RESEND_API_KEY) {
//   console.warn('⚠️ RESEND_API_KEY not set. Email sending will fail.');
// }
// if (!process.env.RECEIVER_EMAIL) {
//   console.warn('⚠️ RECEIVER_EMAIL not set.');
// }

// const resend = new Resend(process.env.RESEND_API_KEY);

// app.get('/', (req, res) => res.json({ status: 'ok', service: 'portfolio-backend' }));

// function escapeHtml(unsafe) {
//   return String(unsafe)
//     .replaceAll('&', '&amp;')
//     .replaceAll('<', '&lt;')
//     .replaceAll('>', '&gt;')
//     .replaceAll('"', '&quot;')
//     .replaceAll("'", '&#039;');
// }

// app.post('/contact', async (req, res) => {
//   try {
//     console.log('Reçu backend:', req.body);
//     const { name, email, subject, message } = req.body || {};

//     if (!name || !email || !message) {
//       return res.status(400).json({ error: 'name, email and message are required' });
//     }
//     if (message.length > 2000) {
//       return res.status(400).json({ error: 'message too long' });
//     }

//     const emailSubject = subject
//       ? `Nouveau message de ${name} via portfolio – ${subject}`
//       : `Nouveau message de ${name} via portfolio`;

//     const html = `
//       <h3>Nouveau message depuis le portfolio</h3>
//       <p><strong>Nom:</strong> ${escapeHtml(name)}</p>
//       <p><strong>Email:</strong> ${escapeHtml(email)}</p>
//       <p><strong>Projet:</strong> ${escapeHtml(subject || 'Non spécifié')}</p>
//       <p><strong>Message:</strong></p>
//       <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
//     `;

//     const resp = await resend.emails.send({
//       from: 'Portfolio <onboarding@resend.dev>',
//       to: process.env.RECEIVER_EMAIL,
//       subject: emailSubject,
//       html,
//     });

//     return res.json({ ok: true, id: resp.id || null });
//   } catch (err) {
//     console.error('Error /contact', err);
//     return res.status(500).json({ error: 'internal_error' });
//   }
// });

// app.listen(PORT, '0.0.0.0', () => {
//   console.log(`✅ portfolio-backend listening on http://0.0.0.0:${PORT}`);
// });

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import { Resend } from 'resend';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// 🔐 CORS sécurisé
const allowedOrigins = [
  'https://portfolio-fullstack-umber.vercel.app',
  'https://portfolio-fullstack-git-main-joshua-nzuzis-projects.vercel.app',
  'https://portfolio-fullstack-m0zlk6hud-joshua-nzuzis-projects.vercel.app',
  'https://portfolio-fullstack-n7ozqx48l-joshua-nzuzis-projects.vercel.app',
  'http://localhost:3000',
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    console.warn(`❌ Origin refusée: ${origin}`);
    return callback(null, false);
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.options('*', (req, res) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  return res.sendStatus(204);
});

// 🛡️ Rate limiting anti-spam
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: { error: 'too_many_requests' },
});
app.use('/contact', limiter);

// 🧠 Middlewares
app.use(express.json({ limit: '10kb' }));

// 🔧 Resend setup
if (!process.env.RESEND_API_KEY) console.warn('⚠️ RESEND_API_KEY not set.');
if (!process.env.RECEIVER_EMAIL) console.warn('⚠️ RECEIVER_EMAIL not set.');
const resend = new Resend(process.env.RESEND_API_KEY);

// 🔐 Helpers
function escapeHtml(unsafe) {
  return String(unsafe)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

// 🔍 Health check
app.get('/', (req, res) => res.json({ status: 'ok', service: 'portfolio-backend' }));

// 📩 Contact endpoint
app.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body || {};
    console.info(`[CONTACT] Message reçu de ${name} <${email}>`);

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'name, email and message are required' });
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'invalid_email_format' });
    }
    if (message.length > 2000) {
      return res.status(400).json({ error: 'message too long' });
    }

    const emailSubject = subject
      ? `Nouveau message de ${name} via portfolio – ${subject}`
      : `Nouveau message de ${name} via portfolio`;

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
      to: process.env.RECEIVER_EMAIL,
      subject: emailSubject,
      html,
    });

    return res.json({ ok: true, id: resp.id || null, message: 'Message envoyé avec succès' });
  } catch (err) {
    console.error(`[CONTACT] Erreur:`, err.message);
    return res.status(500).json({ error: 'internal_error' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ portfolio-backend listening on http://0.0.0.0:${PORT}`);
});

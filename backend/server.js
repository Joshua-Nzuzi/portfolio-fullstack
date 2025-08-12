import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Autoriser uniquement ton frontend Vercel
const allowedOrigins = [
  "https://portfolio-fullstack-n7ozqx48l-joshua-nzuzis-projects.vercel.app",
  "http://localhost:3000"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS non autorisé pour cette origine : " + origin));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Middleware pour parser le JSON
app.use(express.json());

// Config Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Route de test
app.get("/", (req, res) => {
  res.json({ message: "Backend opérationnel 🚀" });
});

// Route Contact
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Tous les champs sont requis" });
  }

  try {
    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "tonemail@exemple.com", // ✅ Remplace par ton email
      subject: `Nouveau message de ${name}`,
      html: `<p><strong>Email :</strong> ${email}</p>
             <p><strong>Message :</strong> ${message}</p>`
    });

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error("Erreur envoi email :", error);
    res.status(500).json({ error: "Erreur serveur lors de l'envoi de l'email" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend en ligne sur http://localhost:${PORT}`);
});

import { useState } from "react";
import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Validation helpers
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const isValidName = (name) =>
    /^[a-zA-ZÀ-ÿ\s'-]{2,}$/.test(name.trim());

  const sanitize = (str) => str.replace(/<[^>]*>?/gm, '').trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!name || !email || !message) {
      toast.error("Merci de remplir tous les champs.");
      setIsLoading(false);
      return;
    }

    if (!isValidName(name)) {
      toast.error("Nom invalide. Utilise uniquement des lettres.");
      setIsLoading(false);
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Adresse email invalide.");
      setIsLoading(false);
      return;
    }

    const API_URL = process.env.REACT_APP_API_URL;
    const payload = {
      name: sanitize(name),
      email: sanitize(email),
      message: sanitize(message),
    };

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.ok) {
        toast.success("✅ Message envoyé avec succès !");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error("❌ Une erreur s’est produite. Veuillez réessayer.");
      }
    } catch (error) {
      toast.error("❌ Erreur réseau. Vérifie ta connexion ou ton backend.");
    }

    setIsLoading(false);
  };

  return (
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <form
          onSubmit={handleSubmit}
          className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
        >
          <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
            Contact Form
          </p>

          <FormInput
            inputLabel="Full Name"
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="name"
            placeholderText="Your Name"
            ariaLabelName="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <FormInput
            inputLabel="Email"
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="email"
            placeholderText="Your email"
            ariaLabelName="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="mt-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              id="message"
              name="message"
              cols="14"
              rows="6"
              aria-label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
            <Button
              title={isLoading ? "⏳ Envoi..." : "Send Message"}
              type="submit"
              aria-label="Send Message"
              disabled={isLoading}
            />
          </div>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};
<button
  onClick={() => toast.success("✅ Test toast OK")}
  className="bg-green-600 text-white px-4 py-2 mt-4 rounded"
>
  Tester les toasts
</button>


export default ContactForm;

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { toast } from 'react-toastify';
// import Button from './reusable/Button';

const selectOptions = [
  'Web Application',
  'Mobile Application',
  'UI/UX Design',
  'Branding',
];

const HireMeModal = ({ onClose }) => {
  // États contrôlés du formulaire
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(selectOptions[0]);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const resetForm = () => {
    setName('');
    setEmail('');
    setSubject(selectOptions[0]);
    setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validation basique
    if (!name || !email || !message) {
      toast.error('Merci de remplir les champs nom, email et message.');
      setIsLoading(false);
      return;
    }

    try {
      const API_URL = process.env.REACT_APP_API_URL;

const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      

      const data = await response.json();

      if (data.ok) {
        toast.success(' Message envoyé avec succès !');
        resetForm();
        onClose(); // Ferme le modal après succès
      } else {
        toast.error('❌ Une erreur s’est produite. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Erreur réseau :', error);
      toast.error('❌ Erreur réseau. Vérifie ta connexion ou ton backend.');
    }
    setIsLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
    >
      {/* Backdrop */}
      <div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

      {/* Modal Content */}
      <main className="flex flex-col items-center justify-center h-full w-full">
        <div className="modal-wrapper flex items-center z-30">
          <div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
            <div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
              <h5 className="text-primary-dark dark:text-primary-light text-xl">
                What project are you looking for?
              </h5>
              <button onClick={onClose} className="px-4 font-bold text-primary-dark dark:text-primary-light">
                <FiX className="text-3xl" />
              </button>
            </div>

            <div className="modal-body p-5 w-full h-full">
              <form onSubmit={handleSubmit} className="max-w-xl m-4 text-left">
                <div>
                  <input
                    className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    aria-label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="mt-6">
                  <input
                    className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    aria-label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mt-6">
                  <select
                    className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                    id="subject"
                    name="subject"
                    aria-label="Project Category"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  >
                    {selectOptions.map((option) => (
                      <option key={option} className="text-normal sm:text-md" value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-6">
                  <textarea
                    className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                    id="message"
                    name="message"
                    cols="14"
                    rows="6"
                    aria-label="Details"
                    placeholder="Project description"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>

                <div className="mt-6 pb-4 sm:pb-1">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
                    aria-label="Submit Request"
                  >
                    {isLoading ? 'Envoi...' : 'Send Request'}
                  </button>
                </div>
              </form>
            </div>

            <div className="modal-footer mt-2 sm:mt-0 py-5 px-8 border-t text-right">
              <button
                onClick={onClose}
                type="button"
                className="px-4 sm:px-6 py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
                aria-label="Close Modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default HireMeModal;

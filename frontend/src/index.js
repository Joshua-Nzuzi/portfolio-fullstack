import './css/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 👈 Ajout ici

const container = document.getElementById('root');
const root = createRoot(container);

// 👇 Wrapping App with BrowserRouter
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

reportWebVitals();

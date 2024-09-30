import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/styles.css';

import App from './App.jsx';

console.log('pendejo');
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
);

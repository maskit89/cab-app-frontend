import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactGA from "react-ga4";
import App from './App.jsx'
import './index.css'

// Initialize Google Analytics with your unique Measurement ID
ReactGA.initialize("G-ST08W906FZ");

// Send a default pageview when the user first loads the app
ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Landing Page" });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
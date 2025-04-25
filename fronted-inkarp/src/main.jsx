import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LazyMotion, domMax } from 'framer-motion';

createRoot(document.getElementById('root')).render(
  <LazyMotion features={domMax}>
    <App />
    <ToastContainer />
  </LazyMotion>
)

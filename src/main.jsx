import React from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';
createRoot(document.getElementById('root')).render(<React.StrictMode><LazyMotion features={domAnimation} strict><App/></LazyMotion></React.StrictMode>);

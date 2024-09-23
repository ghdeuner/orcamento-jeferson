import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Importação do Firebase SDK
import { initializeApp } from 'firebase/app';

// Configuração do Firebase (a mesma que você tinha no seu `index.html`)
const firebaseConfig = {
  apiKey: "AIzaSyDwRBVwkDxV7DpotUxM1I2h93WKjrBBNaA",
  authDomain: "orcamento-jef.firebaseapp.com",
  projectId: "orcamento-jef",
  storageBucket: "orcamento-jef.appspot.com",
  messagingSenderId: "1091584226669",
  appId: "1:1091584226669:web:aa864c5108bbdc79a4d664"
};

// Inicialização do Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

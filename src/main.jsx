import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: REACT_APP_APYKEY,
  authDomain: "ecommerce-b454c.firebaseapp.com",
  projectId: "ecommerce-b454c",
  storageBucket: "ecommerce-b454c.appspot.com",
  messagingSenderId: "1015616777300",
  appId: "1:1015616777300:web:a282fed57f4f06dea0d1c1"
};

initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)

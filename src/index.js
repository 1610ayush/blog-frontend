import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAX-ZDkBcn1T5aZhsQSSoq-_uI_Om8vlZ0",
  authDomain: "blog-app-6859d.firebaseapp.com",
  projectId: "blog-app-6859d",
  storageBucket: "blog-app-6859d.appspot.com",
  messagingSenderId: "492709103273",
  appId: "1:492709103273:web:872ccb8d2a2af9983f0bb8"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

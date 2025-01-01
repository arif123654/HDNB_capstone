import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "@/assets/css/main.css";

const rootEl = document.getElementById('root-tag');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="672761637911-888tftqg1pfo6dr7v67q6hr0ngfg7i4u.apps.googleusercontent.com">;
    <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)

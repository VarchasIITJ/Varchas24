import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {GoogleOAuthProvider} from "@react-oauth/google"

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='328055137490-06tgp954jaqdrnunj0jrd6f1i2rln11l.apps.googleusercontent.com'>
    <App />
  </GoogleOAuthProvider>
)

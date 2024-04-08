import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import './bootstrap.min.css'
import {GoogleOAuthProvider} from '@react-oauth/google'
ReactDOM.createRoot(document.getElementById('root')).render(
  

    <GoogleOAuthProvider clientId = "769524625764-u23066u8bdbmvp8ntsatpphgaf3g8j7e.apps.googleusercontent.com">
      <React.StrictMode>
      <BrowserRouter> 
       <App />
       </BrowserRouter>
      </React.StrictMode>,
    </GoogleOAuthProvider>
 
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
// For Redux
import { PersistGate } from "redux-persist/integration/react";
import { Store, persistor } from "./Redux/store";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='683775471938-58b72leflt6aau4vfv1at7ujlkeq2csb.apps.googleusercontent.com'>
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </PersistGate>
    </Provider>
  </GoogleOAuthProvider>,
)

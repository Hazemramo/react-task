import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <Auth0Provider
    domain="dev-xaco7hws2ltzgbjh.us.auth0.com"
    clientId="NQG0IEvv7fKeXBQQZKZjTOkzD6Nr9vcZ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
)

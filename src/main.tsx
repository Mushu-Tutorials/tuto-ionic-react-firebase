import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// use hook after platform dom ready
GoogleAuth.initialize({
  clientId: '84671872206-92g1h5oli8c5cqduu3thibid32jrf8qd.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
  grantOfflineAccess: true,
});

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Leaflet
import 'leaflet/dist/leaflet.css';

// react-h5-audio-player
import 'react-h5-audio-player/lib/styles.css';

// i18n
import 'config/i18n';

// Custom CSS
import 'styles/theme.scss';

import Placeholder from 'components/Placeholder';

const App = lazy(() => import('./App'));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Suspense fallback={<Placeholder layout="full-page" />}>
      <App />
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

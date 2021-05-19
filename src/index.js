import React from 'react';
import { hydrate, render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '@/store';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

const AppRoot = () => {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </HelmetProvider>
    </Provider>
  );
};

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<AppRoot />, rootElement);
} else {
  render(<AppRoot />, rootElement);
}

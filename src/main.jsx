import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import  store from '../src/store/store.js'; // Make sure this path is correct
import App from './App.jsx';
import './index.scss';

// Create the root element for React
 createRoot(document.getElementById("root")).render(

  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);

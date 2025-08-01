import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // This is crucial!
import UserContext from './Context/UserContext.jsx'
import {Provider} from 'react-redux'
import { store } from './redux/store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <UserContext>
    <App />
  </UserContext>
  </Provider>
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {UserContextProvider} from './Context/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>  
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

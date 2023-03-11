import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));

export const renderDomTree = (state, addPost) => {
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} />
    </React.StrictMode>
  );
}


reportWebVitals();

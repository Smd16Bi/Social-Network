import React from 'react';
import state, { addPost, subscribe, updateMessage } from './redux/state';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
const renderDomTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateMessage={updateMessage} />
    </React.StrictMode>
  );
}
renderDomTree(state);

// Render DOM(34-35)
subscribe(renderDomTree)


reportWebVitals();

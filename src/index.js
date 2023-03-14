import React from 'react';
import store from './redux/state';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
const renderDomTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        dispatch={store.dispatch.bind(store)}
        state={state}
      />
    </React.StrictMode>
  );
}
renderDomTree(store.getState());
store.subscribe(renderDomTree)


reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



let state = {
  dataPosts: {
    post: [
      { id: 1, message: "Hello world", like: 25 },
      { id: 2, message: "First post", like: 15 },
    ]
  },
  dataDialogs: {
    dialogs: [
      { id: 1, name: "Anton" },
      { id: 2, name: "Oksana" },
      { id: 3, name: "Sasha" },
      { id: 4, name: "Dima" },
    ],
    messages: [
      { id: 1, messege: "Hello" },
      { id: 2, messege: "World" },
      { id: 3, messege: "My" },
      { id: 4, messege: "Name" },
    ]
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './redux/store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(store)
console.log(store.getState())

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducer from './redux/reducer'
import App from './App';

const store = createStore(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider stare={store}>
  <App />
</Provider>
);

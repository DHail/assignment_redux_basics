import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import accountManagement from "./reducers"
import { createAccount } from "./actions";
import { createStore } from "redux";


let store = createStore(accountManagement);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

console.log("initial state", store.getState());

store.dispatch(createAccount({
    name: "Jim Bob",
    amount: 1000000
}));




ReactDOM.render(
  <App />,
  document.getElementById('root')
);

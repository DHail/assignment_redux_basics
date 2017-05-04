import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


import { addGrocery } from './actions';
import groceryList from './reducers';
import { createStore } from 'redux';

let store = createStore(groceryList);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

console.log("initial state", store.getState());

store.dispatch(addGrocery({
    name: "Whey BigMuscle Protein Milk Meathead Max Power Shake Bar",
    amount: 10,
    category: "Beauty",
    purchased: false
}));





ReactDOM.render(
  <App />,
  document.getElementById('root')
);

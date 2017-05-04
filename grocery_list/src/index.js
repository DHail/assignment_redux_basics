import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


import { addGrocery, purchaseItem, setPurchasedFilter, setFilter } from './actions';
import { groceryApp } from './reducers';
import { createStore } from 'redux';

let store = createStore(groceryApp);

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

store.dispatch(purchaseItem(1))

store.dispatch(setPurchasedFilter("SHOW_MEATIEST"))




ReactDOM.render(
  <App />,
  document.getElementById('root')
);




// {
    
//  groceryList: [ { name: "whatever"} ],
//  purchasedFilter: "SHOW_ALL",
//  categoryFilter: "SHOW_ALL"
//  filters: {
//      purchased: "SHOW_ALL",
//      category: "SHOW_ALL"
//  }
    
// }

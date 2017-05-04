import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {
    financeApp
}
from "./reducers"
import {
    createAccount,
    withdrawMoney,
    depositMoney,
    transferMoney,
    addTranaction
}
from "./actions";
import {
    createStore
}
from "redux";


let store = createStore(financeApp);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

console.log("initial state", store.getState());

store.dispatch(createAccount({
    name: "Jim Bob",
    balance: 1000000
}));

store.dispatch(createAccount({
    name: "Tammy Sue",
    balance: 19
}));


store.dispatch(withdrawMoney({
    account: 1,
    amount: 178
}));
store.dispatch(addTranaction({
    transactionDate: new Date(),
    originAccount: 1,
    destinationAccount: null,
    amount: 178
}));


store.dispatch(depositMoney({
    account: 1,
    amount: 45000
}));
store.dispatch(addTranaction({
    transactionDate: new Date(),
    originAccount: null,
    destinationAccount: 1,
    amount: 45000
}));


store.dispatch(transferMoney({
    originAccount: 1,
    destinationAccount: 2,
    amount: 500000
}))
store.dispatch(addTranaction({
    transactionDate: new Date(),
    originAccount: 1,
    destinationAccount: 2,
    amount: 500000
}));

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

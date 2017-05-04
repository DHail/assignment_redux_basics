import {
    CREATE_ACCOUNT,
    VIEW_ACCOUNT,
    WITHDRAW_MONEY,
    DEPOSIT_MONEY,
    TRANSFER_MONEY,
    ADD_TRANSACTION
}
from "./actions";

import {
    combineReducers
}
from 'redux';

function accountManagement(state = [], action) {
    switch (action.type) {
        case CREATE_ACCOUNT:
            return [...state, action.data];
        case WITHDRAW_MONEY:
            return state.map(account => {
                if (account.id == action.data.account) {
                    if (account.balance < action.data.amount) return account;
                    return {
                        ...account,
                        balance: account.balance - action.data.amount
                    };
                }
                else {
                    return account;
                }
            });
        case DEPOSIT_MONEY:
            return state.map(account => {
                if (account.id == action.data.account) {
                    return {
                        ...account,
                        balance: account.balance + action.data.amount
                    };
                }
                else {
                    return account;
                }
            });
        case TRANSFER_MONEY:
            let withdrawTransaction = state.map(account => {
                if (account.id == action.data.originAccount) {
                    if (account.balance < action.data.amount) return account;
                    return {
                        ...account,
                        balance: account.balance - action.data.amount
                    };
                }
                else {
                    return account;
                }
            });

            return withdrawTransaction.map(account => {
                if (account.id == action.data.destinationAccount) {
                    return {
                        ...account,
                        balance: account.balance + action.data.amount
                    };
                }
                else {
                    return account;
                }
            });
        default:
            return state;
    }
}

function transactionManagement(state = [], action) {
    switch (action.type) {
        case ADD_TRANSACTION:
            return [
                ...state,
                action.data
            ];
        default:
            return state;
    }

}




export const financeApp = combineReducers({
    transactionManagement,
    accountManagement
});

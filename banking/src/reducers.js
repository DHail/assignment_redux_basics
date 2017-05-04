import {
  CREATE_ACCOUNT,
  VIEW_ACCOUNT,
  WITHDRAW_MONEY,
  DEPOSIT_MONEY,
  TRANSFER_MONEY
} from "./actions";

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
        } else {
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
        } else {
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
        } else {
          return account;
        }
      });

      return withdrawTransaction.map(account => {
        if (account.id == action.data.destinationAccount) {
          return {
            ...account,
            balance: account.balance + action.data.amount
          };
        } else {
          return account;
        }
      });
    default:
      return state;
  }
}

export default accountManagement;

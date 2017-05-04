export const VIEW_ACCOUNT = "VIEW_ACCOUNT";
export const WITHDRAW_MONEY = "WITHDRAW_MONEY";
export const DEPOSIT_MONEY = "DEPOSIT_MONEY";
export const TRANSFER_MONEY = "TRANSFER_MONEY";
export const ADD_TRANSACTION = "ADD_TRANSACTION";
//-------For testing-----//
export const CREATE_ACCOUNT = "CREATE_ACCOUNT";
//-------Testing---------//

let accountId = 1;
export function createAccount(data) {
    return {
        type: CREATE_ACCOUNT,
        data: {
            ...data,
            id: accountId++
        }
    };
}

export function viewAccount(id) {
    return {
        type: VIEW_ACCOUNT,
        data: id
    };
}

export function withdrawMoney(data) {
    return {
        type: WITHDRAW_MONEY,
        data
    };
}

export function depositMoney(data) {
    return {
        type: DEPOSIT_MONEY,
        data
    };
}

export function transferMoney(data) {
    return {
        type: TRANSFER_MONEY,
        data
    };
}


export function addTranaction(data) {
    return {
        type: ADD_TRANSACTION,
        data
    };
}

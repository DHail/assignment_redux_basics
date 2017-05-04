export const VIEW_ACCOUNT = "VIEW_ACCOUNT";

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
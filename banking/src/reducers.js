
import { CREATE_ACCOUNT, VIEW_ACCOUNT } from "./actions";

function accountManagement(state = [], action) {
    switch (action.type) {
        case CREATE_ACCOUNT:
            return [
                ...state,
                action.data
            ];
        default:
            return state;
    }
}



export default accountManagement;
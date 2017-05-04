//import constants
import { ADD_GROCERY_ITEM } from './actions';

function groceryList(state = [], action) {
    switch (action.type) {
        
        case ADD_GROCERY_ITEM:
            return [
                ...state,
                action.data
            ];
        default:
            return state;
    }
    
}


export default groceryList;

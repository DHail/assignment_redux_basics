import {combineReducers} from 'redux'

//import constants
import { ADD_GROCERY_ITEM } from "./actions";
import { PURCHASE_GROCERY_ITEM } from "./actions";
import { SET_PURCHASED_FILTER } from "./actions";

function groceryList(state = [], action) {
  switch (action.type) {
    case ADD_GROCERY_ITEM:
      return [...state, action.data];
    case PURCHASE_GROCERY_ITEM:
      return state.map(item => {
        if (item.id == action.data) {
          return {
            ...item,
            purchased: true
          };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
}

function purchasedFilter(state = "SHOW_ALL", action) {
  switch (action.type) {
    case SET_PURCHASED_FILTER:
      return action.data;
    default:
      return state;
  }
}

export const groceryApp = combineReducers({
  groceryList,
  purchasedFilter
})

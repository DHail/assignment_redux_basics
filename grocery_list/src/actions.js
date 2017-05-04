export const ADD_GROCERY_ITEM = "ADD_GROCERY_ITEM";
export const PURCHASE_GROCERY_ITEM = "PURCHASE_GROCERY_ITEM"
export const SET_PURCHASED_FILTER = "SET_PURCHASED_FILTER"
export const SET_FILTER = "SET_FILTER"
export const SORT_ITEMS = "SORT_ITEMS"



let groceryId = 1;
export function addGrocery(data) {

    return {
        type: ADD_GROCERY_ITEM,
        data: {
            ...data,
            id: groceryId++
        }
    };
}

export function purchaseItem(id) {
  return {
    type: PURCHASE_GROCERY_ITEM,
    data: id
  };
}


export function setFilter(data) {
  return {
    type: SET_FILTER,
    data
  };
}

export function sortItems(data) {
  return {
    type: SORT_ITEMS,
    data
  }
}
export const ADD_GROCERY_ITEM = "ADD_GROCERY_ITEM";
export const PURCHASE_GROCERY_ITEM = "PURCHASE_GROCERY_ITEM"
export const SET_PURCHASED_FILTER = "SET_PURCHASED_FILTER"



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
  }
}


export function setPurchasedFilter(data) {
  return {
    type: SET_PURCHASED_FILTER,
    data
  }
}
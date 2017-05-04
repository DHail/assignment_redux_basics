export const ADD_GROCERY_ITEM = "ADD_GROCERY_ITEM";



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

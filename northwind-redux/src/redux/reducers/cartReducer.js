import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // eğer ürün daha önce ekliyse, quantity arttırmak gerek
      var addedItem = state.find(
        (c) => c.product.id === action.payload.product.id
      );
      if (addedItem) {
        var newState = state.map((cartItem) => {
          if (cartItem.product.id === action.payload.product.id) {
            return Object.assign({}, addedItem, {
              quantity: addedItem.quantity + 1,
            }); // ilk parantez kopyala..addedItem parametre.
          }
          console.log(cartItem);
          return cartItem;
        });
        console.log(newState);
        return newState;
      } else {
        return [...state, { ...action.payload }]; // state'in kopyasını al. ve o state action ile gelen payload'u ekle. burası çokomelli
      }

    case actionTypes.REMOVE_FROM_CART:
      const newState2 = state.filter(
        cartItem => cartItem.product.id !== action.payload.id
      );
      return newState2;
    default:
      return state;
  }
}

import { createSelector } from 'reselect';

// input selector
const selectCart = state => state.cart;


export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);


export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

/* 
first : an array input select
second : function of each output of input selector
*/
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      //reduce
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);


export const selectCarttotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      //reduce
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
);

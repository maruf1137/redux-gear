import { DECREASE, INCREASE, CLEAR, REMOVE, TOTALS } from "./action";

const reducer = (state, action) => {
  if (action.type === CLEAR) {
    return { ...state, cart: [] };
  }
  if (action.type === REMOVE) {
    console.log("item is removed", action.id);
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    };
  }
  if (action.type === INCREASE) {
    let tampCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tampCart };
  }
  if (action.type === DECREASE) {
    console.log(action.payload.amount);
    let tampCart = [];
    if (action.payload.amount === 1) {
      tampCart = state.cart.filter((item) => item.id !== action.payload.id);
    } else {
      tampCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      });
    }
    return { ...state, cart: tampCart };
  }

  if (action.type === TOTALS) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
  return state;
};

export default reducer;

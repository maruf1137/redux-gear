import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
// redux stuff

const initialState = {
  cart: cartItems,
  total: 0.0,
  amount: 5,
};

const store = createStore(reducer, initialState);

// console.log(store.getState());

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;

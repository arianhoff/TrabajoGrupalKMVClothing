import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const Cartprovider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const productosEnElLocalStorage = localStorage.getItem("cartProducts");
      return productosEnElLocalStorage
        ? JSON.parse(productosEnElLocalStorage)
        : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartItems));
    console.log(cartItems)
  }, [cartItems]);

  const addItemToCart = (product) => {
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === product.id
    );
    if (inCart) {
      setCartItems(
        cartItems.map((productInCart) => {
          if (productInCart.id === product.id) {
            return { ...inCart, amount: inCart.amount + 1 };
          } else return productInCart;
        })
      );
    } else {
      setCartItems([...cartItems, { ...product, amount: 1 }]);
    }
  };

  const deleteItemCart = (product) => {
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === product.id
    );
    if (inCart.amount === 1) {
      setCartItems(
        cartItems.filter((productInCart) => productInCart.id !== product.id)
      );
    } else {
      setCartItems(
        cartItems.map((productInCart) => {
        if (productInCart.id === product.id) {
          return { ...inCart, amount: inCart.amount - 1 };
        } else return productInCart;
      })
      );
    }
  };
  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, deleteItemCart }}>
      {children}
    </CartContext.Provider>
  );
};

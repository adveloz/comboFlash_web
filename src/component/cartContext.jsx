import React, { createContext, useState, useEffect } from 'react';
import { useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from localStorage or API
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCartItems(storedCart);
    }
  }, []);

  const addToCart = (item) => {
    const existingItem = cartItems.find(i => i.id === item.id);
    if (existingItem) {
      setCartItems(cartItems.map(i => 
        i.id === item.id ? {...i, quantity: i.quantity + 1} : i
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const updateItemQuantity = (itemId, quantity) => {
    setCartItems(cartItems.map(item => 
      item.id === itemId ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateItemQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

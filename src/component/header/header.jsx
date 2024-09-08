import React from "react";
import Logo from "./COMBOS FLASH Recurso 7.png";
import {CartDialog} from "./cartDialog";
import { useContext } from 'react';
import { CartContext } from './../cartContext';

export const Header = () => {
  const { cartItems } = useContext(CartContext);
  const [showCartDialog, setShowCartDialog] = React.useState(false);

  const handleClose = () => setShowCartDialog(false);

  return (
    <header>
      <a href="#">
        <div className="logo">
          <img src={Logo} alt="logo" width="70px" />
        </div>
      </a>
      <div className="cart" onClick={() => setShowCartDialog(true)}>
        <box-icon name="cart"></box-icon>
        <span className="item__total">{cartItems.length}</span>
      </div>
      <CartDialog 
        isOpen={showCartDialog} 
        onClose={handleClose} 
        cartItems={cartItems} 
      />
    </header>
  );
};

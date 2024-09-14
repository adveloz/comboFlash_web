import React from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../cartContext';

export const CartDialog = ({ isOpen, onClose, cartItems }) => {
  if (!isOpen || cartItems.length === 0) return null;

  const totalPrice = cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);

  const sendMessage = () => {
    let whatsappUrl = 'https://api.whatsapp.com/send?phone=+5352018719';
        let message = 'Hola, soy un cliente de Combo Flash y este es mi pedido:\n\n';
    
        for (let i = 0; i < cartItems.length; i++) {
          const item = cartItems[i];
          message += `${i + 1}. ${item.name}: $${item.price}\n`;
        }
    
        message += `\nTotal: $${totalPrice}\n\nPor favor, confirme si deseas proceder con la compra.`;
    
        whatsappUrl += '&text=' + encodeURIComponent(message);
    
        window.location.href = whatsappUrl;
  };

  return (
    <Offcanvas show={isOpen} onHide={onClose} style={{ backgroundColor: '#F34338', borderColor: '#F34338' }}>
      <Offcanvas.Header closeButton>
        {/* <Offcanvas.Title>Carrito</Offcanvas.Title> */}
      </Offcanvas.Header>
      <Offcanvas.Body>
        {/* <h3>Productos a enviar pedido</h3> */}
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <strong style={{color: "#FFD200"}}>{item.name}: <span>${item.price}</span></strong>
          </div>
        ))}
        <div className="total-section">
          <p style={{color: "#FFD200"}}>Total a pagar: <span>${totalPrice}</span></p>
        </div>
        <br />
        <div className="btn">
          <Button onClick={sendMessage}>Comprar</Button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};


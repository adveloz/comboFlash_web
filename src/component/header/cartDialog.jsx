import React from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import { useCart } from '../cartContext';

export const CartDialog = ({ isOpen, onClose, cartItems }) => {
  const { removeFromCart, updateItemQuantity, clearCart } = useCart();

  if (!isOpen || cartItems.length === 0) return null;

  const totalPrice = cartItems.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0).toFixed(2);

  const sendMessage = () => {
    let whatsappUrl = 'https://api.whatsapp.com/send?phone=+5352018719';
    let message = 'Hola, soy un cliente de Combo Flash y este es mi pedido:\n\n';
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (x${item.quantity}): $${parseFloat(item.price) * item.quantity.toFixed(2)}\n`;
    });
    
    message += `\nTotal: $${totalPrice}\n\nPor favor, confirme si deseas proceder con la compra.`;
    
    whatsappUrl += '&text=' + encodeURIComponent(message);
    
    window.location.href = whatsappUrl;
  };

  return (
    <Offcanvas show={isOpen} onHide={onClose} placement="end" style={{ backgroundColor: '#F34338', borderColor: '#F34338' }}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title style={{ color: 'black' }}>Carrito de Compras</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item mb-3 p-2 border rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
            <div className="d-flex justify-content-between align-items-center">
              <strong style={{ color: "black" }}>{item.name}</strong>
              <span style={{ color: "black" }}>${parseFloat(item.price) * item.quantity.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-2">
              <div>
                <Button variant="outline-light" size="sm" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</Button>
                <span className="mx-2" style={{ color: "black" }}>{item.quantity}</span>
                <Button variant="outline-light" size="sm" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</Button>
              </div>
              <Button variant="outline-danger" style={{color: 'black'}} size="sm" onClick={() => removeFromCart(item.id)}>Eliminar</Button>
            </div>
          </div>
        ))}
        <div className="total-section mt-3">
          <p style={{ color: "black", fontSize: '1.2em' }}>Total a pagar: <span>${totalPrice}</span></p>
        </div>
        <div className="d-grid gap-2 mt-3">
          <Button variant="warning" onClick={sendMessage}>Comprar</Button>
          <Button variant="outline-light" onClick={clearCart}>Vaciar Carrito</Button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};


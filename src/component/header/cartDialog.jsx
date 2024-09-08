import React from "react";

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
    <div className="cart-dialog">
      <div className="dialog-content">
        <h2>Productos a comprar</h2>
        <hr></hr>
        <br></br>
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <strong>{item.name}: <span>${item.price}</span></strong>
            <hr></hr>
            <br></br>
          </div>
        ))}
        <div className="total-section">
          <h3>Total a pagar: <span>${totalPrice}</span></h3>
        </div>
        <br></br>
        <div className="btn">
        <button onClick={sendMessage}>Comprar</button>
        <button onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import Logo from "./COMBOS FLASH Recurso 7.png";
import { CartDialog } from "./cartDialog";
// import { useContext } from 'react';
import { useCart } from '../cartContext'; // Importar useCart en su lugar
import { Offcanvas, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const { cartItems } = useCart(); // Usar useCart en lugar de useContext
  const [showCartDialog, setShowCartDialog] = React.useState(false);
  const [showOffcanvas, setShowOffcanvas] = React.useState(false);
  const location = useLocation();

  const handleClose = () => {
    setShowOffcanvas(false);
    setShowCartDialog(false);
  };

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  React.useEffect(() => {
    setShowOffcanvas(false);
  }, [location]);

  return (
    <header style={{ zIndex: "1000" }}>
      <Button variant="outline-primary" onClick={toggleOffcanvas} style={{ backgroundColor: "#F34338", border: "none" }}>
        <box-icon name="menu"></box-icon>
      </Button>
      <Link to="/">
        <div className="logo">
          <img src={Logo} alt="logo" width="70px" />
        </div>
      </Link>
      <div className="cart" onClick={() => setShowCartDialog(true)}>
        <box-icon name="cart"></box-icon>
        <span className="item__total">{cartItems.length}</span>
      </div>

      <Offcanvas show={showOffcanvas} onHide={handleClose} style={{ backgroundColor: "#F34338" }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ color: "black" }}>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="navbar-nav">
            <li><Link to="/" style={{ textDecoration: "none", color: "#FFD200", fontWeight: "bold" }}>Inicio</Link></li>
            <li><Link to="/combosdecomida" style={{ textDecoration: "none", color: "#FFD200", fontWeight: "bold" }}>Combos de Comida</Link></li>
            <li><Link to="/alimentos" style={{ textDecoration: "none", color: "#FFD200", fontWeight: "bold" }}>Alimentos</Link></li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      <CartDialog 
        isOpen={showCartDialog} 
        onClose={handleClose} 
        cartItems={cartItems} 
      />
    </header>
  );
};

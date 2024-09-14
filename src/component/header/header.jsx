import React from "react";
import Logo from "./COMBOS FLASH Recurso 7.png";
import { CartDialog } from "./cartDialog";
import { useContext } from 'react';
import { CartContext } from './../cartContext';
import { Offcanvas, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


export const Header = () => {
  const { cartItems } = useContext(CartContext);
  const [showCartDialog, setShowCartDialog] = React.useState(false);
  const [showOffcanvas, setShowOffcanvas] = React.useState(false);
  const location = useLocation();

  const handleClose = () => {
    setShowOffcanvas(false);
    setShowCartDialog(false)
  };

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  React.useEffect(() => {
    setShowOffcanvas(false);
  }, [location]);

  return (
    <header>
       <Button variant="outline-primary" onClick={toggleOffcanvas} style={{backgroundColor: "#F34338", border: "none"}}>
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
     

      <Offcanvas show={showOffcanvas} onHide={handleClose} style={{backgroundColor: "#F34338"}}>
        <Offcanvas.Header closeButton>
          {/* <Offcanvas.Title>Menú</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="navbar-nav">
          <Link to="/" style={{textDecoration: "none", textDecoration: "none", color: "#FFD200", fontWeight: "bold"}} className="nav-item">
              <p className="nav-link active" aria-current="page">Inicio</p>     
            </Link>
            <Link to="/combosdecomida" style={{textDecoration: "none", color: "#FFD200", fontWeight: "bold"}} className="nav-item">
              <p className="nav-link" href="#">Combos de Comida</p>
            </Link>
            <Link to="/alimentos" style={{textDecoration: "none", color: "#FFD200", fontWeight: "bold"}} className="nav-item">
              <p className="nav-link" href="#">Alimentos</p>
            </Link>
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

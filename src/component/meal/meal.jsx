import React from "react";
import Img from "./Pasted image.png";
import serviTask from "../axiosConfig";
import { useCart } from '../cartContext'; // Importar useCart en su lugar
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Form, Spinner } from 'react-bootstrap';
import { AppContext } from "../providers/appProviders";
import { useContext } from 'react';

const ProductCard = ({ product, onAddToCart }) => (
  
  <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="h-100"
>
  <Card className="h-100 shadow-sm m-3" style={{ background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          borderRadius: '10px',
          border: '1px solid rgba(255, 255, 255, 0.3)'}}>
  <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden">
  <a href="#">
      <div className="producto__img" style={{display: "flex", justifyContent: 'center', marginTop: "10px"}}>
        <img src={Img} alt="producto" style={{borderRadius: "15px"}} />
      </div>
    </a>
  </motion.div>
  <Card.Body className="d-flex flex-column">
  <Card.Title>{product.name}</Card.Title>
  <Card.Text className="text-muted mb-2">Provincia: {product.areaCountry}</Card.Text>
  <Card.Text className="mb-2">{product.description}</Card.Text>
  <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center">
            <span className="h5 mb-0">${product.price.toFixed(2)}</span>
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button style={{backgroundColor: "#F34338"}} onClick={() => onAddToCart(product)}>
                Agregar al carrito
              </Button>
            </motion.div>
          </div>
          </div>
  </Card.Body>
  </Card>
  </motion.div>
);

const iniData = (data) => {
  return data.map((element) => ({
    id: element.id,
    name: element.name,
    description: element.description,
    price: element.price,
    areaCountry: element.areaCountryName
  }));
};

export const Meal = () => {
  const { cartItems, addToCart } = useCart();
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [filter, setFilter] = React.useState("");
  const { showNotificationApp } = useContext(AppContext);

  React.useEffect(() => {
    setLoading(true);
    serviTask
      .get('meal')
      .then((response) => {
        setItems(iniData(response.data));
      })
      .catch((error) => {
        console.error("Error cargando datos:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredItems = items.filter(item => 
    item.areaCountry.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAddToCart = (product) => {
    showNotificationApp(
      "Producto agregado al carrito",
      "success"
    );
    addToCart(product);
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Alimentos</h1>
      <Form className="mb-4">
        <Form.Group controlId="filterForm">
          <Form.Control
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filtrar por provincia..."
            className="form-control-lg"
          />
        </Form.Group>
      </Form>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </Spinner>
        </div>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {filteredItems.map((product) => (
            <Col key={product.id}>
              <ProductCard product={product} onAddToCart={handleAddToCart} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};
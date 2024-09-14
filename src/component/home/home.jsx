import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Home = () => {
  return (
    <div className="container-fluid pt-5 pb-5" >
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6">
        <div className="card shadow-sm">
          <div className="card-body" style={{backgroundImage: "linear-gradient(to right, #FFD200, #F34338)"}}>
            <h2 className="text-center mb-4">Datos de Dirección</h2>
            
            <form >
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="firstName">
                  <Form.Label>Nombre(s)</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese sus nombres" required />
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="lastName">
                  <Form.Label>Apellidos</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese su apellido paterno" required />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="address">
                <Form.Label>Dirección</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Ingrese su dirección completa" required />
              </Form.Group>

              <div className="d-grid gap-2">
                <Button variant="primary" type="submit" className="mx-auto" style={{backgroundColor: "#F34338", border: "none"}}>
                  Enviar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

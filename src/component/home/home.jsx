import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Home = () => {
  return (
    <div className="container-fluid py-5 home-background">
    <style>
      {`
        .home-background {
          background: linear-gradient(135deg, #FFD200, #F34338);
          min-height: 100vh;
        }
        .blur-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .custom-btn {
          background-color: #F34338;
          border-color: #F34338;
        }
        .custom-btn:hover {
          background-color: #d63b31;
          border-color: #d63b31;
        }
      `}
    </style>
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card shadow blur-card">
          <div className="card-body">
            <h1 className="text-center mb-4 text-dark">Bienvenido a Combo Flash</h1>
            <p className="text-center mb-5 text-dark">Envío de remesas y alimentos de forma rápida y segura</p>
            
            <form>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="firstName" className="form-label text-dark">Nombre(s)</label>
                  <input type="text" className="form-control" id="firstName" placeholder="Ingrese sus nombres" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastName" className="form-label text-dark">Apellidos</label>
                  <input type="text" className="form-control" id="lastName" placeholder="Ingrese sus apellidos" required />
                </div>
              </div>
              
              <div className="mb-3">
                <label htmlFor="address" className="form-label text-dark">Dirección</label>
                <textarea className="form-control" id="address" rows="3" placeholder="Ingrese su dirección completa" required></textarea>
              </div>
              
              <div className="mb-3">
                <label htmlFor="service" className="form-label text-dark">Tipo de Servicio</label>
                <select className="form-select" id="service" required>
                  <option value="">Seleccione un servicio</option>
                  <option value="remesas">Envío de Remesas</option>
                  <option value="alimentos">Envío de Alimentos</option>
                </select>
              </div>
              
              <div className="d-grid gap-2">
                <button type="submit" className="btn custom-btn btn-lg text-white">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
    <div className="row mt-5">
      <div className="col-md-4">
        <div className="card mb-4 blur-card">
          <div className="card-body text-center">
            <h3 className="card-title text-dark">Envío Rápido</h3>
            <p className="card-text text-dark">Nuestros envíos llegan en tiempo récord a su destino.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-4 blur-card">
          <div className="card-body text-center">
            <h3 className="card-title text-dark">Seguridad Garantizada</h3>
            <p className="card-text text-dark">Su dinero y alimentos están protegidos durante todo el proceso.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-4 blur-card">
          <div className="card-body text-center">
            <h3 className="card-title text-dark">Atención al Cliente</h3>
            <p className="card-text text-dark">Estamos disponibles 24/7 para atender sus consultas.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

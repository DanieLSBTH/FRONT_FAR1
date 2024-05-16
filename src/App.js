import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import { FaHome, FaBox, FaUser, FaUserTie, FaTruck, FaFileInvoice, FaFileAlt, FaImage, FaShoppingCart } from 'react-icons/fa';
import ShowProducts from './components/ShowProducts';
import ShowClients from './components/ShowClients';
import ShowEmployees from './components/ShowEmployees';
import ShowProviders from './components/ShowProviders';
import ShowInvoices from './components/ShowInvoice';
import ShowInvoiceDetails from './components/ShowInvoiceDetails';
import Show from './components/Show';
import ShowdDetails from './components/ShowdDetails';
import LoginForm from './components/LoginForm';
import './App.css';
import logo from './logo.png';
import axios from 'axios';
import { FaSignOutAlt } from 'react-icons/fa';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/usuario/logout');
      if (response.data.success) {
        setIsLoggedIn(false);
      } else {
        console.error('Error al cerrar sesión:', response.data.message);
      }
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <BrowserRouter>
      <div>
        {isLoggedIn && (
          <>
            <header className="navbar">
              <div className="company-description">
                <h1>Mi Farmacia</h1>
                <p>Tu salud, nuestra prioridad.</p>
              </div>
            </header>
            <nav className="navbar">
              <div className="navbar-container">
                <div className="navbar-links">
                  <Link to="/" className="nav-link">
                    <FaHome /> Inicio
                  </Link>
                  <Link to="/productos" className="nav-link">
                    <FaBox /> Productos
                  </Link>
                  <Link to="/clientes" className="nav-link">
                    <FaUser /> Clientes
                  </Link>
                  <Link to="/employees" className="nav-link">
                    <FaUserTie /> Empleados
                  </Link>
                  <Link to="/providers" className="nav-link">
                    <FaTruck /> Proveedores
                  </Link>
                  <Link to="/invoice" className="nav-link">
                    <FaFileInvoice /> Facturas
                  </Link>
                  <Link to="/invoicedetails" className="nav-link">
                    <FaFileAlt /> Facturas detalle
                  </Link>
                  <Link to="/show" className="nav-link">
                    <FaImage /> imagen
                  </Link>
                  <Link to="/showddetails" className="nav-link">
                    <FaShoppingCart /> compra
                  </Link>
                  {/* Botón de cierre de sesión */}
                  <button className="logout-btn" onClick={handleLogout}>
                  <FaSignOutAlt className="logout-icon" /> Cerrar sesión
                  </button>
                </div>
                <div className="logo-container">
                  <img src={logo} alt="Logo de la farmacia" className="logo" />
                </div>
              </div>
            </nav>
          </>
        )}
        <Routes>
          <Route path="/loginform" element={<LoginForm onLogin={handleLogin} />} />
          {isLoggedIn ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/productos/*" element={<ShowProducts />} />
              <Route path="/clientes/*" element={<ShowClients />} />
              <Route path="/employees/*" element={<ShowEmployees />} />
              <Route path="/providers/*" element={<ShowProviders />} />
              <Route path="/invoice/*" element={<ShowInvoices />} />
              <Route path="/invoicedetails/*" element={<ShowInvoiceDetails />} />
              <Route path="/showddetails/*" element={<ShowdDetails />} />
            </>
          ) : (
            <Route path="/" element={<Navigate to="/loginform" />} />
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div className="Home">
      <Show />
    </div>
  );
}

export default App;
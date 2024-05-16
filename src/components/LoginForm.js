import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUsuarioChange = (e) => {
    setUsuario(e.target.value);
  };

  const handleContraseñaChange = (e) => {
    setContraseña(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/usuario/login', {
        usuario,
        contraseña,
      });
      if (response.data.success) {
        onLogin(response.data.user); // Llama a la función onLogin proporcionada por el padre (App.js)
        navigate('/'); // Redirige a la página de inicio

      } else {
        setError(response.data.message); // Establece el mensaje de error
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Hubo un problema al iniciar sesión'); // Establece un mensaje de error genérico
    }
  };

  return (
    <div className="login-outer-container">
      <div className="login-inner-container">
        <h1 className="login-title">Iniciar Sesión</h1>
        <div className="form-container">
          {error && <div className="error-message">{error}</div>} {/* Mostrar el mensaje de error si existe */}
          <div className="input-container">
            <span className="input-label">Usuario</span>
            <input
              type="text"
              id="usuario"
              value={usuario}
              placeholder="Usuario"
              onChange={handleUsuarioChange}
              className="form-input input-border"
            />
          </div>
          <div className="input-container">
            <span className="input-label">Contraseña</span>
            <input
              type="password"
              id="contraseña"
              value={contraseña}
              placeholder="Contraseña"
              onChange={handleContraseñaChange}
              className="form-input input-border"
            />
          </div>
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            INGRESAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

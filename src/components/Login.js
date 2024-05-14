import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // o cualquier otra biblioteca para hacer solicitudes HTTP

function Login() {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState(''); // Cambiando el nombre de la variable a 'contraseña'

  const handleUsuarioChange = (event) => {
    setUsuario(event.target.value);
  };

  const handleContraseñaChange = (event) => {
    setContraseña(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      // Enviar una solicitud POST al servidor para autenticar al usuario
      const response = await axios.post('http://localhost:8080/api/usuario/login', {
        usuario,
        contraseña // Usando el nombre correcto de la variable
      });
  
      // Si la respuesta es exitosa, redirigir al usuario al componente Menu
      if (response.data.success) {
        navigate('/menu');
      } else {
        // Si la autenticación falla, mostrar un mensaje de error
        console.error('Error al iniciar sesión:', response.data.message);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };
  
  const navigate = useNavigate();

  return (
    <form onSubmit={handleSubmit}>
      
      <div>
        <h3>Inicio de Sesión</h3>
      </div>
      
      <div>
          <input type="text" value={usuario} onChange={handleUsuarioChange} placeholder="Ingrese Usuario" required />
      </div>

      <div>
          <input type="password" value={contraseña} onChange={handleContraseñaChange} placeholder="Ingrese Contraseña" required />
      </div>
      
      <button type="submit">Iniciar sesión</button>

      <div>
          <a href='#'>
            Olvidé mi Contraseña
          </a>
      </div>

      <div>   
          <a href='#'>
            Olvidé mi Usuario
          </a>
      </div>        

    </form>
  );
}

export default Login;

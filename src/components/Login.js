import React, { useState } from 'react';
import './login.css';

function Login() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setUsuario(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí podrías enviar los datos del formulario a través de una API para autenticar al usuario
    console.log('Usuario:', usuario);
    console.log('Contraseña:', password);


  };

  return (
    <form onSubmit={handleSubmit}>
      
      <div>
        <h3>Inicio de Seccion</h3>
      </div>
      
      <div>
          <input type="text" value={usuario}onChange={handleEmailChange} placeholder="Ingrese Usuario" required />
      </div>

      <div>
          <input type="password" value={password} onChange={handlePasswordChange} placeholder="Ingrese Contraseña" required />
      </div>
      
      <button type="submit">Iniciar sesión</button>

      <div>
          <a href='#'>
            Olvide mi Contraseña
          </a>
      </div>

      <div>   
          <a href='#'>
            Olvide mi Usuario
          </a>
      </div>        

    </form>
  );
}

export default Login;
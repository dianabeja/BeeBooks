import React from "react";
import "../styles/App.css";

export const IniciarSesion = () => {
  return (
<div class="centered-form">
<h1>Inicio de sesion</h1>
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Correo electrónico</label>
      <input type="email" class="form-control small-input" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Contraseña</label>
      <input type="password" class="form-control small-input" id="exampleInputPassword1"/>
    </div>
    <div class="form-actions">
      <button type="submit" class="btn btn-primary submit-button" > <a href="/Inicio" style={{color:"white", textDecoration:"none"}}>Iniciar sesión</a> </button>
      <div id="emailHelp" class="form-text">¿Aún no estás registrado? <a href="Registro">Registrarse ahora</a></div>
    </div>
  </form>
</div>

  )};
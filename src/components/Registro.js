import React from "react";
import "../styles/App.css";

export const Registro = () => {
  return (
    
    <div class="centered-form">
    <h1>Registrarse</h1>
    <form class="row g-3">
  <div class="col-md-4">
    <label for="inputEmail4" class="form-label">Correo electrónico</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder= "email@example.com"/>
  </div>
  <div class="col-md-4">
    <label for="inputPassword4" class="form-label">Contraseña</label>
    <input type="password" class="form-control" id="inputPassword4" placeholder= "********"/>
  </div>
  <div class="col-md-4">
    <label for="inputPassword4" class="form-label">Confirmar contraseña</label>
    <input type="password" class="form-control" id="inputPassword4" placeholder= "********"/>
  </div>
  <div class="col-4">
    <label for="inputAddress" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="inputAddress" />
  </div>
  <div class="col-4">
    <label for="inputAddress2" class="form-label">Apellidos</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder=""/>
  </div>
  <div class="col-md-4">
    <label for="inputCity" class="form-label">Número de personal</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputZip" class="form-label" >Número de sucursal</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">Foto de perfil</label>
    <input type="file"></input>
  </div>
  <div class="col-md-4" style={{ marginTop: "40px"}}>
    <button type="submit" class="btn btn-primary"> <a href="/Iniciarsesion" style={{color:"white", textDecoration:"none"}}>Registrarse</a>     </button>
  </div>
</form>
<div id="emailHelp" class="form-text">¿Ya estás registrado? <a href="Iniciarsesion">Iniciar sesión </a></div>
</div>
  )}
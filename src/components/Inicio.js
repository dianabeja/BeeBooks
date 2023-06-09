import React from 'react';
import "../styles/Inicio.css"
import "../styles/Alumno.css"

export const Imagen = () => {
  return (
    <div class="imagen">
    </div>
  );
};

export const Alumno = () => {
  return (
    <div>
      <div class="my-2 mx-auto p-relative bg-white shadow-1 blue-hover .Carta">
        <div className='TarjetaFoto'>
          <img src="./img/Yo1.jpeg" alt="Foto mía"
            class="d-block w-full"></img>
          <h2>
            Nombre del usuario: <br></br>
            Número de personal: <br></br>
            Numero de sucursal: <br></br> 
          </h2>

          <h3>
            Diana Laura Bautista García <br></br>
            zS21004503 <br></br>
            24092023
          </h3>
        </div>

        <div class="px-2 py-2">
          <p class="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px">
            Descripción
          </p>

          <h1 class="ff-serif font-weight-normal text-black card-heading mt-0 mb-1 Carta1">
          Descubre BeeBooks, la editorial innovadora que te cautivará. Nuestros libros de calidad, diversidad y originalidad te sorprenderán y abrirán nuevos horizontes. 
          </h1>

          <p class="mb-1">
          Trabajamos con talentosos autores y diseñadores para crear joyas literarias únicas. ¡Sumérgete en nuestras páginas y déjate llevar por la magia de BeeBooks!
          </p>

        </div>

        <a href="mailto:bagdiana03@gmail.com" class="text-uppercase d-inline-block font-weight-medium lts-2px ml-2 mb-2 text-center styled-link" >
          Contactar BeeBooks
        </a>
      </div>
    </div>

  )
}

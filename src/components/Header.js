import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (

    <div className="Encabezado">

      <div className="RecuadroLogo">
        <h1><b className="Logo_Text">BeeBooks</b></h1>
        <img className='Logo_Img' src='./img/Icono.png' alt='Textp'></img>
      </div>

      <div className="menu">
        <nav>
          <ul>
            <li>
              <Link to="/Inicio" className="no-underline black">
                Inicio
              </Link>
            </li>

            <li>
              <Link to="/MostrarLibros" className="no-underline black">
                Mostrar Libros
              </Link>
            </li>

            <li>
              <Link to="/AgregarLibros" className="no-underline black" >
                Agregar Libros
              </Link>
            </li>

            <li>
              <Link to="/buscarLibros" className="no-underline black" >
                Buscar libros
              </Link>
            </li>
          
            <li>
              <Link to="/Iniciarsesion" className="no-underline black" >
                Cerrar sesión
              </Link>
            </li>
          </ul>
        </nav>
      </div>

    </div>
  );
};

export default Header;
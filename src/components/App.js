import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";
import AgregarLibro from "../componentes/AgregarLibro.component";
import { Imagen, Alumno } from "./Inicio";
import Header from "./Header";
import {Switch } from "react-router-dom/cjs/react-router-dom.min";
import LibrosLista from "../componentes/ListaLibros.component";
import { BuscarLibros } from "./BuscarLibros";
import { IniciarSesion } from "./IniciarSesion";
import HeaderInicio from "./Headerinicio";
import { Registro } from "./Registro";

const App = () => {
  return (
    <div>
      <div className="container mt-3">
      <Switch>
      <Route exact path= {["/", "/Iniciarsesion"]} component={HeaderInicio} />
      <Route exact path= {["/", "/Registro"]} component={HeaderInicio} />
      <Route exact path="/Inicio" component={Header} />
      <Route exact path="/MostrarLibros" component={Header} />
      <Route exact path="/AgregarLibros" component={Header} />
      <Route exact path= "/BuscarLibros" component={Header}/>
      </Switch>

      <Switch>
      <Route exact path= {["/", "/Iniciarsesion"]} component={Imagen} />
      <Route exact path= {["/", "/Registro"]} component={Imagen} />
      <Route exact path="/Inicio" component={Imagen} />
      <Route exact path="/MostrarLibros" component={Imagen} />
      <Route exact path="/AgregarLibros" component={Imagen} />
      <Route exact path= "/BuscarLibros" component={Imagen}/>
      </Switch>
      
          <Switch>
          <Route exact path= {["/", "/Iniciarsesion"]} component={IniciarSesion}/>
      <Route exact path= {["/", "/Registro"]} component={Registro} />
            <Route exact path="/Inicio" component={Alumno} />
            <Route exact path="/MostrarLibros" component={LibrosLista} />
            <Route exact path="/AgregarLibros" component={AgregarLibro} />
            <Route exact path= "/BuscarLibros" component={BuscarLibros}/>
          </Switch>
      </div>
      <footer className="footer">BeeBooks</footer>
    </div>
  );
};

export default App;

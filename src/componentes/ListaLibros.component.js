import React, { Component } from "react";
import TutorialDataService from "../servicios/Firestore.service";
import "../styles/Mostrar.css";

import Libro from "./Libro.component";

export default class LibrosLista extends Component {
  constructor(props) {
    super(props);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.onDataChange = this.onDataChange.bind(this);

    this.state = {
      Datos_List: [],
      currentTutorial: null,
      currentIndex: -1,
    };

    this.unsubscribe = undefined;
  }

  componentDidMount() {
    this.unsubscribe = TutorialDataService.getAll()
      .orderBy("title", "asc")
      .onSnapshot(this.onDataChange);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onDataChange(items) {
    let Datos_List = [];

    items.forEach((item) => {
      let id = item.id;
      let data = item.data();
      Datos_List.push({
        id: id,
        title: data.title,
        description: data.description,
        autor: data.autor,
        isbn: data.isbn,
        editorial: data.editorial,
        url: data.url,
      });
    });

    this.setState({
      datos: Datos_List,
    });
  }

  refreshList() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1,
    });
  }

  setActiveTutorial(Datos_List, index) {
    this.setState({
      currentTutorial: Datos_List,
      currentIndex: index,
    });
  }

  render() {
    const { datos, currentTutorial, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-6">
          <span class="Mostrar_Titulo">Libros guardados: </span>

          {datos &&
            datos.map((Datos_List, index) => {
              return (
                <div class="card card3">
                  <div className="inner">
                    <button
                      className={+(index === currentIndex ? "active" : "")}
                      onClick={() => this.setActiveTutorial(Datos_List, index)}
                      key={index}
                    >
                      {Datos_List.title}
                    </button>
                  </div>
                </div>
              );
            })}

          <ul className="list-group"></ul>
        </div>

        <div className="col-md-6">
          {currentTutorial ? (
            <Libro tutorial={currentTutorial} refreshList={this.refreshList} />
          ) : (
            <div>
              <br />
              <p>Selecciona un libro...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

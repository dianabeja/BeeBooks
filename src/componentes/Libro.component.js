import React, { Component } from "react";
import "firebase/firestore";

export default class Libro extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeAutor=this.onChangeAutor.bind(this);
    this.onChangeIsbn=this.onChangeIsbn.bind(this);
    this.onChangeEditorial=this.onChangeEditorial.bind(this);

    this.state = {
      currentTutorial: {
        id: null,
        title: "",
        description: "",
        image: "",
        autor:"",
        isbn:"",
        editorial:"",
      },
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { tutorial } = nextProps;
    if (prevState.currentTutorial.id !== tutorial.id) {
      return {
        currentTutorial: tutorial,
        message: "",
      };
    }

    return prevState.currentTutorial;
  }

  componentDidMount() {
    this.setState({
      currentTutorial: this.props.tutorial,
    });
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          title: title,
        },
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        description: description,
      },
    }));
  }

  onChangeAutor(e) {
    const autor = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        autor: autor,
      },
    }));
  }

  onChangeIsbn(e) {
    const isbn = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        isbn: isbn,
      },
    }));
  }

  onChangeEditorial(e) {
    const editorial = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        editorial: editorial,
      },
    }));
  }
  render() {
    const { currentTutorial } = this.state;

    return (
      <div>
        <h4> Información </h4>
        {currentTutorial ? (
          <div className="edit-form">
            <form>

              <div className="form-group">
                <label htmlFor="title">Titulo</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentTutorial.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Reseña</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label htmlFor="autor">Autor</label>
                <input
                  type="text"
                  className="form-control"
                  id="autor"
                  value={currentTutorial.autor}
                  onChange={this.onChangeAutor}
                />
              </div>

              <div className="form-group">
                <label htmlFor="isbn">ISBN</label>
                <input
                  type="text"
                  className="form-control"
                  id="isbn"
                  value={currentTutorial.isbn}
                  onChange={this.onChangeIsbn}
                />
              </div>

              <div className="form-group">
                <label htmlFor="editorial">Editorial</label>
                <input
                  type="text"
                  className="form-control"
                  id="editorial"
                  value={currentTutorial.editorial}
                  onChange={this.onChangeEditorial}
                />
              </div>

              <div className="form-group">
                <label htmlFor="url"> Imagen: </label>
                <img src={currentTutorial.url} alt="Hola" style={{margin: "30px"}}></img>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <br />
            <p>Selecciona un libro</p>
          </div>
        )}
      </div>
    );
  }
}

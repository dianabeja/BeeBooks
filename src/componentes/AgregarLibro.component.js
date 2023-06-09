import React, { Component } from "react";
import firebase from "firebase/compat/app";
import TutorialDataService from "../servicios/Firestore.service.js";
import "firebase/compat/storage";
 
export const storage = firebase.storage();
 
export default class AgregarLibro extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeAutor=this.onChangeAutor.bind(this);
    this.onChangeIsbn=this.onChangeIsbn.bind(this);
    this.onChangeEditorial=this.onChangeEditorial.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);
    this.onChangeFile = this.onChangeFile.bind(this);

    this.state = {
      name: "",
      title: "",
      description: "",
      file: null,
      url: "",
      autor:"",
      isbn:"",
      editorial:"",
    };
  }

  onChangeFile(e) {
    console.log(e.target.files[0]);
    this.setState({
      file: e.target.files[0],
    });
  }

  handleUpload(e, file) {
    e.preventDefault();
    console.log(file);
    alert(file.name);
    const uploadTask = storage.ref("/images/" + file.name).put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      storage
        .ref("images")
        .child(file.name)
        .getDownloadURL()
        .then((myurl) => {
              this.setState({url:myurl});
        });
    });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeAutor(e) {
    this.setState({
      autor: e.target.value,
    });
  }

  onChangeIsbn(e) {
    this.setState({
      isbn: e.target.value,
    });
  }

  onChangeEditorial(e) {
    this.setState({
      editorial: e.target.value,
    });
  }
  
  saveTutorial() {
    let name = this.state.name;

    let data = {
      title: this.state.title,
      description: this.state.description,
      url: this.state.url,
      autor: this.state.autor,
      isbn: this.state.isbn,
      editorial: this.state.editorial,
    };

    TutorialDataService.create(data, name)
      .then(() => {
        console.log("Created new item successfully!");
        this.setState({
          submitted: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      name: "",
      title: "",
      description: "",
      url: "",
      autor:"",
      isbn:"",
      editorial:"",
      submitted: false,
    });
  }

  render() {
    return (
      
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>Libro agregado exitosamente!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>

            <div className="form-group">
              <label htmlFor="title">Identificador</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">Titulo</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Reseña</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            <div className="form-group">
              <label htmlFor="autor">Autor</label>
              <input
                type="text"
                className="form-control"
                id="autor"
                required
                value={this.state.autor}
                onChange={this.onChangeAutor}
                name="autor"
              />
            </div>

            <div className="form-group">
              <label htmlFor="isbn">ISBN</label>
              <input
                type="text"
                className="form-control"
                id="isbn"
                required
                value={this.state.isbn}
                onChange={this.onChangeIsbn}
                name="isbn"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Editorial</label>
              <input
                type="text"
                className="form-control"
                id="editorial"
                required
                value={this.state.editorial}
                onChange={this.onChangeEditorial}
                name="editorial"
              />
            </div>

            <div>
                <form onSubmit= {(event)=>{
                  this.handleUpload(event, this.state.file);
                }}>
                <input type="file"  onChange={(event)=>{
                  this.onChangeFile(event)
                }}/>

                <button disabled={!this.state.file}>Subir imagen</button>

                </form>
                <img src={this.state.url} alt=""/>
              </div>


            <button onClick={this.saveTutorial} className="btn btn-success">
              Agregar
            </button>
          </div>
        )}
      </div>
    );
  }
}

import firebase from "../firebase/firebase";

const db = firebase.collection("/libros");

class TutorialDataService {
  getAll() {
    return db;
  }

  create(starts,libro) {
    return db.doc(libro).set(starts);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new TutorialDataService();
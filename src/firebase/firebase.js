import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDOK0gQxoZUqz76XTfLEnUJ_X_ZUqJv-xo",
  authDomain: "beebooks-b76d1.firebaseapp.com",
  projectId: "beebooks-b76d1",
  storageBucket: "beebooks-b76d1.appspot.com",
  messagingSenderId: "957711383571",
  appId: "1:957711383571:web:10deba73ed910dee2b53e6",
  measurementId: "G-S70ZW2VVF7"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const storage = firebase.storage();

export {
  storage, firestore as default
}
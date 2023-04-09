// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv5R3MogcKNuqN9b66Qf1EHgvzgW7ivpQ",
  authDomain: "history-facts-9848e.firebaseapp.com",
  projectId: "history-facts-9848e",
  storageBucket: "history-facts-9848e.appspot.com",
  messagingSenderId: "891638998662",
  appId: "1:891638998662:web:13c377e972c0dcf4789307",
  measurementId: "G-32RWBZLRLV"
};
firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
export { firebase, provider };

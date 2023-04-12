// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import "firebase/auth";

/* import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

 */
//import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // Your Firebase configuration object

    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};
firebase.initializeApp(firebaseConfig);

firebase.firestore.setLogLevel('debug');

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);

// Initialize Firebase Auth and create an instance of GoogleAuthProvider
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
//const { initializeFirebaseApp } = require('firestore-export-import')

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
/* const customAuth = {
  ...auth,
  signInWithPopup: (provider) => auth.signInWithPopup(provider),
};
 */

export { auth, provider, db };

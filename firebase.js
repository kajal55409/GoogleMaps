// // Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
// import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyARYjGno5iE66wQ57tkUcpqZhyw_xk7ZSw",
//   authDomain: "map-e7ea1.firebaseapp.com",
//   projectId: "map-e7ea1",
//   storageBucket: "map-e7ea1.appspot.com",
//   messagingSenderId: "904188273139",
//   appId: "1:904188273139:web:65cadae4e715b66cc67286",
//   measurementId: "G-SLZDQFFEQ4"
// };

// // Initialize Firebase
// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app()
// }

// // const auth = firebase.auth()
// const auth = getAuth(app);

// export { auth };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import firebase from '@firebase/app';
require('firebase/auth');
const firebaseConfig = {
    apiKey: "AIzaSyARYjGno5iE66wQ57tkUcpqZhyw_xk7ZSw",
  authDomain: "map-e7ea1.firebaseapp.com",
  projectId: "map-e7ea1",
  storageBucket: "map-e7ea1.appspot.com",
  messagingSenderId: "904188273139",
  appId: "1:904188273139:web:65cadae4e715b66cc67286",
  measurementId: "G-SLZDQFFEQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
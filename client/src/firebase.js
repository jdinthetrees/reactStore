import firebase from "firebase/app";
import "firebase/auth";




// Firebase configuration
const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "ecommerce-3c709.firebaseapp.com",
    projectId: "ecommerce-3c709",
    // storageBucket: "ecommerce-3c709.appspot.com",
    messagingSenderId: "890397473982",
    appId: "1:890397473982:web:f82bbb2c8e66e63052b2ef"
  };
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  //export

  export const auth = firebase.auth();

  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
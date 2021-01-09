import firebase from "firebase/app";
import "firebase/auth";




// Your web app's Firebase configuration
const config = {
    apiKey: "REACT_APP_API_KEY",
    authDomain: "ecommerce-3c709.firebaseapp.com",
    projectId: "ecommerce-3c709",
    // storageBucket: "ecommerce-3c709.appspot.com",
    messagingSenderId: "REACT_APP_MESSENGING_SENDER_ID",
    appId: "REACT_APP_APP_ID"
  };
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  //export

  export const auth = firebase.auth();

  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
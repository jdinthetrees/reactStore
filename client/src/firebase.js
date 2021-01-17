import firebase from "firebase/app";
import "firebase/auth";




// Firebase configuration
const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: "ecommerce-3c709.appspot.com",
    messagingSenderId: process.env.REACT_APP_MESSENGING_SENDER_ID,
    appId: process.env.REACT_APP_APPID,
  };
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  //export

  export const auth = firebase.auth();

  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
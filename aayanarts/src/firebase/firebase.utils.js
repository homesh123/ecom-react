import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyAHcrVCf8aKNqEqXiBXVxHY2aM23ZMWZuA",
    authDomain: "aayanarts-4c211.firebaseapp.com",
    projectId: "aayanarts-4c211",
    storageBucket: "aayanarts-4c211.appspot.com",
    messagingSenderId: "1032396258068",
    appId: "1:1032396258068:web:d954ef49fa65ed8be52001",
    measurementId: "G-Z0983NDZKP"
  };

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);

export default firebase;
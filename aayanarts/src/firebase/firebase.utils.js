import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDedt5j9ba8BcigI5HqVLfDafIVVcjDmCs",
  authDomain: "aa123-88b5e.firebaseapp.com",
  projectId: "aa123-88b5e",
  storageBucket: "aa123-88b5e.appspot.com",
  messagingSenderId: "54613514521",
  appId: "1:54613514521:web:8206c6b586a5ddfae94d88"
};

  export const createUserProfileDocument = async (userAuth,additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          });
        } catch(error){
          console.log('error creating user', error.message)
        }
    }  return userRef;

  };

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);

export default firebase;
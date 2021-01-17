import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "./config";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// init firestore
export const firestore = firebase.firestore();
//init auth
export const auth = firebase.auth();
//SignIn with Google
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
// popUp
GoogleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

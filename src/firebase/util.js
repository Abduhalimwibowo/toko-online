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

export const handleUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const { uid } = userAuth;
  // const firestore
  const userRef = firestore.doc("users/${uid}");
  const snapshot = await userRef.get();

  // cek datauser
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const timestamp = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdDate: timestamp,
        ...additionalData,
      });
    } catch (err) {}
  }
  return userRef;
};

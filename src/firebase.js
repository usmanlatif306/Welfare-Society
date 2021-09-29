import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// const app = firebase.initializeApp({
//   apiKey: "AIzaSyA6RDHNcBtQZUfmZzZuDllnQyz_HG6X8BY",
//   authDomain: "welfare-society-ac74c.firebaseapp.com",
//   projectId: "welfare-society-ac74c",
//   storageBucket: "welfare-society-ac74c.appspot.com",
//   messagingSenderId: "49813554003",
//   appId: "1:49813554003:web:f4d0646d33aec5e35a57a6",
// });
const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_API_ID,
});
export const auth = app.auth();
export const db = app.firestore();
export const storage = app.storage();
export default app;

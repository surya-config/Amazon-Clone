import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAuYROfkJV7YYw_vmG7oTnjlZrGw1A-HU4",
  authDomain: "clone-d1f09.firebaseapp.com",
  databaseURL: "https://clone-d1f09.firebaseio.com",
  projectId: "clone-d1f09",
  storageBucket: "clone-d1f09.appspot.com",
  messagingSenderId: "486979961577",
  appId: "1:486979961577:web:a115c792406dc93cff2678",
  measurementId: "G-5DLTMGL22L",
});

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };

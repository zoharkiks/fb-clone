import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCCiPhceDOYZQTqorP0tALyBnP5idF-gsc",
    authDomain: "facebook-clone-9bdc0.firebaseapp.com",
    databaseURL: "https://facebook-clone-9bdc0.firebaseio.com",
    projectId: "facebook-clone-9bdc0",
    storageBucket: "facebook-clone-9bdc0.appspot.com",
    messagingSenderId: "789335815875",
    appId: "1:789335815875:web:6cf122eac0dbdb591fd476",
    measurementId: "G-FEKESP46X5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
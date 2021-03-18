import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBem2QgXYP9AV3c1W9Cm2YiEeVhUr-9ZVU",
    authDomain: "ig-reels-3ff03.firebaseapp.com",
    projectId: "ig-reels-3ff03",
    storageBucket: "ig-reels-3ff03.appspot.com",
    messagingSenderId: "132965578691",
    appId: "1:132965578691:web:b59f59718913f15a79ef76"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
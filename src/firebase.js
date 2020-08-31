import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDL4c01AbEymSja0bA7TqTxZIJvPoWBijA",
    authDomain: "clone-3a29a.firebaseapp.com",
    databaseURL: "https://clone-3a29a.firebaseio.com",
    projectId: "clone-3a29a",
    storageBucket: "clone-3a29a.appspot.com",
    messagingSenderId: "1076580429648",
    appId: "1:1076580429648:web:d87750a0e42b9b45fe0655",
    measurementId: "G-4YXW3BPD5L"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};




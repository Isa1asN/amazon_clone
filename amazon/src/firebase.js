import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyArq6ZlYC2Wq2dIM-bCOBKL-BD00FrWEjk",
    authDomain: "clone-d0fa7.firebaseapp.com",
    projectId: "clone-d0fa7",
    storageBucket: "clone-d0fa7.appspot.com",
    messagingSenderId: "992293485268",
    appId: "1:992293485268:web:f9a1265f3026d22f921941",
    measurementId: "G-CVZZ3RD4DT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  export {db, auth}
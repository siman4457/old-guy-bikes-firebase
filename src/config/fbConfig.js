import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBCuY1eiM-4Pwv4HMWLgpVeVctaucHbFJA",
  authDomain: "old-guy-bikes.firebaseapp.com",
  databaseURL: "https://old-guy-bikes.firebaseio.com",
  projectId: "old-guy-bikes",
  storageBucket: "old-guy-bikes.appspot.com",
  messagingSenderId: "820373865755",
  appId: "1:820373865755:web:398493565a24e584"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;

import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAD755wFGgR90b3hPpeAmhYM-HrZsv70mQ",
    authDomain: "c-71-a3b42.firebaseapp.com",
    projectId: "c-71-a3b42",
    storageBucket: "c-71-a3b42.appspot.com",
    messagingSenderId: "166341941778",
    appId: "1:166341941778:web:9aa174c2edec48a66d56cb"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

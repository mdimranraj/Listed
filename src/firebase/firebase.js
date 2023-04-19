
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import {firebase} from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD5Sxl4SSFtLihDSRGi8lL1k9yHE6UdkuA",
  authDomain: "listed-project.firebaseapp.com",
  projectId: "listed-project",
  storageBucket: "listed-project.appspot.com",
  messagingSenderId: "494844100274",
  appId: "1:494844100274:web:8793154421b372633093ab",
  measurementId: "G-968MF21DXF"
};

//Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

// firebase.initializeApp(firebaseConfig);
// var auth = auth;
// var provider = new firebase.auth.GoogleAuthProvider(); 

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebase);
const provider = new GoogleAuthProvider();

export {provider};
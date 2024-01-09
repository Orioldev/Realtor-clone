// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr3_WCChCPHnmdDYQ6LIUdnTEDxm9otzQ",
  authDomain: "realtor-clone-reactjs-7ce54.firebaseapp.com",
  projectId: "realtor-clone-reactjs-7ce54",
  storageBucket: "realtor-clone-reactjs-7ce54.appspot.com",
  messagingSenderId: "882050185523",
  appId: "1:882050185523:web:9e5a2107f4b12aa98e2646"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0qpe4Zv0PCzQZ3xcD6bu98sw5iSFCxek",
  authDomain: "real-estate-company-e22b5.firebaseapp.com",
  projectId: "real-estate-company-e22b5",
  storageBucket: "real-estate-company-e22b5.appspot.com",
  messagingSenderId: "13002443125",
  appId: "1:13002443125:web:7c9eb7a8b1f31789842b3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;


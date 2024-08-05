// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFXK4KLF65vcu162sr5hOvObDeZ09vNSQ",
  authDomain: "project-cell-website-f56a7.firebaseapp.com",
  projectId: "project-cell-website-f56a7",
  storageBucket: "project-cell-website-f56a7.appspot.com",
  messagingSenderId: "137885402583",
  appId: "1:137885402583:web:63bbb2fd45ae64c371f792",
  measurementId: "G-QFPMKBPFEG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
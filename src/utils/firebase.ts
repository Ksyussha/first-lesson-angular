// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaKGx-xUgxNoEz2hW3l4Mcqq6I0z6g6kc",
  authDomain: "angular-project-80de2.firebaseapp.com",
  databaseURL: "https://angular-project-80de2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "angular-project-80de2",
  storageBucket: "angular-project-80de2.appspot.com",
  messagingSenderId: "90741323307",
  appId: "1:90741323307:web:750c13a455602c36be9c6e",
  measurementId: "G-4NHXS679G0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);


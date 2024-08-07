// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjEzWaHv1y4koShdPZuphsDqeJvfIPuMQ",
  authDomain: "e-commerce-468c0.firebaseapp.com",
  projectId: "e-commerce-468c0",
  storageBucket: "e-commerce-468c0.appspot.com",
  messagingSenderId: "839082073287",
  appId: "1:839082073287:web:3b80cbaa3c7a6daec6f2e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
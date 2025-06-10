// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQEvndXXRXhbMgMjS7WSODJJt4ZBELKdU",
  authDomain: "retailer-office-e72eb.firebaseapp.com",
  projectId: "retailer-office-e72eb",
  storageBucket: "retailer-office-e72eb.firebasestorage.app",
  messagingSenderId: "1073853849290",
  appId: "1:1073853849290:web:94d27bc0277c15fcda1e33",
  measurementId: "G-1Q9L1JWB09",
  DATABASE_NAME:"https://retailer-office-e72eb-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
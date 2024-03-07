// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqvxzv7bgV4KY-RvGxLe9HIKu-7Aa_KD0",
  authDomain: "ranna-firebase-authentication.firebaseapp.com",
  projectId: "ranna-firebase-authentication",
  storageBucket: "ranna-firebase-authentication.appspot.com",
  messagingSenderId: "257339548720",
  appId: "1:257339548720:web:3cef9faf04bb728551b9f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

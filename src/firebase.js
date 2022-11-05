

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk3E30zvluMKnovAladcMNZsr-WXlr47A",
  authDomain: "altschool-exam02.firebaseapp.com",
  projectId: "altschool-exam02",
  storageBucket: "altschool-exam02.appspot.com",
  messagingSenderId: "452276011977",
  appId: "1:452276011977:web:2c12fb207b4d13c0de9e18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
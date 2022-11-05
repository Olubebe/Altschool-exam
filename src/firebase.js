// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBikODAy5frr4qpMfRrH9IKSrWUigBPdws",
  authDomain: "altschool-exam-da24a.firebaseapp.com",
  projectId: "altschool-exam-da24a",
  storageBucket: "altschool-exam-da24a.appspot.com",
  messagingSenderId: "400889797828",
  appId: "1:400889797828:web:05a32495eff1b695ba7d91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwRoit9hcGx9YMGF3DY-aM7yYc9k5Rt1I",
  authDomain: "b-10-a-10.firebaseapp.com",
  projectId: "b-10-a-10",
  storageBucket: "b-10-a-10.firebasestorage.app",
  messagingSenderId: "186235084784",
  appId: "1:186235084784:web:4592ca85d75a006dd38735"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
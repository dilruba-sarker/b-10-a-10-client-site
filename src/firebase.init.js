// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  
  // apiKey: "AIzaSyAwRoit9hcGx9YMGF3DY-aM7yYc9k5Rt1I",
  
  // authDomain: "b-10-a-10.firebaseapp.com",
  // projectId: "b-10-a-10",
  // storageBucket: "b-10-a-10.firebasestorage.app",
  // messagingSenderId: "186235084784",
  // appId: "1:186235084784:web:4592ca85d75a006dd38735"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOCFSXvLNzFziYd-O_vek2I-Jdoeo4Xr4",
  authDomain: "expense-tracker-17faf.firebaseapp.com",
  projectId: "expense-tracker-17faf",
  storageBucket: "expense-tracker-17faf.firebasestorage.app",
  messagingSenderId: "301332038506",
  appId: "1:301332038506:web:f1014e7ccb9a9267c3db13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
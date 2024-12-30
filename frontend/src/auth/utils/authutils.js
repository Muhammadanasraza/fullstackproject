
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCp_L0sYBzzCGHQ1hmIznrVH8PdAXAegAI",
  authDomain: "smit-management-system.firebaseapp.com",
  projectId: "smit-management-system",
  storageBucket: "smit-management-system.firebasestorage.app",
  messagingSenderId: "299248697702",
  appId: "1:299248697702:web:d5a8fab43f1199727d48a7",
  measurementId: "G-R746HBVWBL"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();




export {
    app,
    auth,
    provider,
    signInWithPopup,
} 

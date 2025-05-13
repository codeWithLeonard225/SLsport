// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDwDz7TRtej92WOkcvxw3f_QpXS5lX9PBc",
  authDomain: "slsport.firebaseapp.com",
  projectId: "slsport",
  storageBucket: "slsport.firebasestorage.app",
  messagingSenderId: "1084577335385",
  appId: "1:1084577335385:web:daed4597e0e8f309ae8948",
  measurementId: "G-N8ECDDM1KJ"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzE4XhVrJKtGS2CcTztisM9e3SaiwNz40",
  authDomain: "romy-1c993.firebaseapp.com",
  projectId: "romy-1c993",
  storageBucket: "romy-1c993.firebasestorage.app",
  messagingSenderId: "761791982874",
  appId: "1:761791982874:web:51669a3e4ed95fcd9910a3",
  measurementId: "G-10GDXRBXE5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

const db = getFirestore(app);
export { auth , db };
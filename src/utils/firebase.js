// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0WWMGbmgnJrFSnpktJwDNVHFD44sZipI",
  authDomain: "netflix-gpt-9bcd9.firebaseapp.com",
  projectId: "netflix-gpt-9bcd9",
  storageBucket: "netflix-gpt-9bcd9.appspot.com",
  messagingSenderId: "521202925712",
  appId: "1:521202925712:web:e093df39ab8d43575dd815",
  measurementId: "G-10DHLLQPCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
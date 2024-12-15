// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-1NDiX_2aC_51EOJL1FBQixw4furxzJQ",
  authDomain: "fir-auth-6eddb.firebaseapp.com",
  databaseURL: "https://fir-auth-6eddb-default-rtdb.firebaseio.com",
  projectId: "fir-auth-6eddb",
  storageBucket: "fir-auth-6eddb.firebasestorage.app",
  messagingSenderId: "266883562078",
  appId: "1:266883562078:web:6e1692d3c9d350783e12cf",
  measurementId: "G-E6W4L13455"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
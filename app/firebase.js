// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqDEiN5eZJsA3gZWR4XiKWj6wVCNH1C-I",
  authDomain: "ggvmart-3af36.firebaseapp.com",
  projectId: "ggvmart-3af36",
  storageBucket: "ggvmart-3af36.appspot.com",
  messagingSenderId: "144732553525",
  appId: "1:144732553525:web:24bca79f320910f43f8c7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
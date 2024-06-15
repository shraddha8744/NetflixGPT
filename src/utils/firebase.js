// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC3lnQL5ybeh5ffq0xcHPju-8ssmkyZnQ",
  authDomain: "netflixgpt-d065f.firebaseapp.com",
  projectId: "netflixgpt-d065f",
  storageBucket: "netflixgpt-d065f.appspot.com",
  messagingSenderId: "1088639385281",
  appId: "1:1088639385281:web:d6ecffcba5bce8e8f55e40",
  measurementId: "G-4059G3LLMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();

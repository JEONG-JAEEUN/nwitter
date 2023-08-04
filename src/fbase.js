import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };
  // apiKey: "AIzaSyDP830QtDYnQIMJ03FBK4Mac1_F21BI0rw",
  // authDomain: "nwitter-992bb.firebaseapp.com",
  // projectId: "nwitter-992bb",
  // storageBucket: "nwitter-992bb.appspot.com",
  // messagingSenderId: "179924450637",
  // appId: "1:179924450637:web:ad2951488aa0f9694a0b04"
  initializeApp(firebaseConfig);

  export const authService = getAuth();
  export const firebaseInstance = firebaseConfig;
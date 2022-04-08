// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz16gCbdcp1VBOb_VoMpQDBRbdR9PMh1g",
  authDomain: "ph-simple-auth.firebaseapp.com",
  projectId: "ph-simple-auth",
  storageBucket: "ph-simple-auth.appspot.com",
  messagingSenderId: "802589719012",
  appId: "1:802589719012:web:6e52576f4f07ebee5e2ff1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

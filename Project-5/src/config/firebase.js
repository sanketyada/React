// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8XGdT3MKP8LZlOjfN7ALwkTtCL3kQivs",
  authDomain: "vite-contact-a83b7.firebaseapp.com",
  projectId: "vite-contact-a83b7",
  storageBucket: "vite-contact-a83b7.firebasestorage.app",
  messagingSenderId: "729710259983",
  appId: "1:729710259983:web:704ba8145f4342653d587a"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
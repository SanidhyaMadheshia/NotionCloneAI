// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfcvHRcZ3Vtzwe4_kHsnddllYg8oCJTU4",
  authDomain: "notion-clone-nextjs-3a9f6.firebaseapp.com",
  projectId: "notion-clone-nextjs-3a9f6",
  storageBucket: "notion-clone-nextjs-3a9f6.firebasestorage.app",
  messagingSenderId: "729415806403",
  appId: "1:729415806403:web:ee0c55622891532fb5a176",
  measurementId: "G-PHB177V2ZR"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = getApps().length ===0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);


export {db};
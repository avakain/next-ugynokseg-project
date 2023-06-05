// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuIMtcmXYjj3mhF88kvXlRUOt474dZliM",
  authDomain: "az-ugynokseg-f4683.firebaseapp.com",
  projectId: "az-ugynokseg-f4683",
  storageBucket: "az-ugynokseg-f4683.appspot.com",
  messagingSenderId: "27259830060",
  appId: "1:27259830060:web:82b0372594f2283c58f689",
  measurementId: "G-21FL3ZVY08"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = app.name && typeof window !== 'undefined' ? getAnalytics(app) : null;
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;
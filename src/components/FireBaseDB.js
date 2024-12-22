// firebaseConfig.js;
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDKuD5JLR-jp_ne-WRp2XZR87Chzckv-Ck",
    authDomain: "secondyearprojectz.firebaseapp.com",
    projectId: "secondyearprojectz",
    storageBucket: "secondyearprojectz.firebasestorage.app",
    messagingSenderId: "1070855025493",
    appId: "1:1070855025493:web:e5fd3c10627ae1d69f75dc",
    measurementId: "G-ZN0F8VZDVY"
  };
  const app = initializeApp(firebaseConfig);
  // Initialize RealTime DataBase
  const analytics = getAnalytics(app);
// Initialize Firebase
const database=getDatabase(app);

export default database;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBm1nGPcN8bLljgsZv1h5tVXQAL_N8OqsA",
  authDomain: "netflix-fd8b3.firebaseapp.com",
  projectId: "netflix-fd8b3",
  storageBucket: "netflix-fd8b3.appspot.com",
  messagingSenderId: "347862129773",
  appId: "1:347862129773:web:d54f676ac14c85fbf7b364",
  measurementId: "G-HG6GW564S9"
};


export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
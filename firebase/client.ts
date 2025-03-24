// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8vLp_nfA3lclSk2WEDJeG7RNERbT23II",
  authDomain: "prepwise-c6ab4.firebaseapp.com",
  projectId: "prepwise-c6ab4",
  storageBucket: "prepwise-c6ab4.firebasestorage.app",
  messagingSenderId: "206120421449",
  appId: "1:206120421449:web:13e01f6a49eb37c59bd798",
  measurementId: "G-HFV8Y2WF8K"
};

// Initialize Firebase
const app = !getApps.length ?initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
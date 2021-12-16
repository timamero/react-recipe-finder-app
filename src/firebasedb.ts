/*
 * Initialize the Realtime Database JavaScript SDK
 * 
 * Resources:
 * https://firebase.google.com/docs/database/web/start?authuser=1
*/ 
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, connectAuthEmulator } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALf1bTmTrsnpBF7On54vJAQEG22YRpzlk",
  authDomain: "cravings-recipe-finder.firebaseapp.com",
  projectId: "cravings-recipe-finder",
  storageBucket: "cravings-recipe-finder.appspot.com",
  messagingSenderId: "114902056164",
  appId: "1:114902056164:web:a02bc7a2d129a1539880f1",
  measurementId: "G-BYSDS5S8WP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const auth = getAuth();

if (process.env.NODE_ENV === 'test') {
  // During testing, connect to the Authentication Emulator
  connectAuthEmulator(auth, "http://localhost:9099");
}

export default db;
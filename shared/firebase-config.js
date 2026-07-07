
import { initializeApp, getApps, getApp }
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore, doc, collection,
  getDoc, getDocs, setDoc, updateDoc,
  addDoc, deleteDoc, query, where,
  orderBy, onSnapshot, increment, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import {
  getAuth, setPersistence, browserLocalPersistence,
  signInWithEmailAndPassword, signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey:            "AIzaSyB_U8xM8IQ6roHRpfrAQSxq8IUDf1-Uhes",
  authDomain:        "bhukkad-food-chaska-41bb8.firebaseapp.com",
  projectId:         "bhukkad-food-chaska-41bb8",
  storageBucket:     "bhukkad-food-chaska-41bb8.firebasestorage.app",
  messagingSenderId: "1049699749452",
  appId:             "1:1049699749452:web:9a01b5d06417c702416ee9",
  measurementId:     "G-Y0ZSNN3DED"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db   = getFirestore(app);
export const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence)
  .catch(e => console.warn('Persistence:', e));

export {
  doc, collection, getDoc, getDocs,
  setDoc, updateDoc, addDoc, deleteDoc,
  query, where, orderBy, onSnapshot,
  increment, serverTimestamp
};
export { signInWithEmailAndPassword, signOut };









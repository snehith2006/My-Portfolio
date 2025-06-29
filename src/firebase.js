// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore"; // ✅ import addDoc
const firebaseConfig = {
  apiKey: "AIzaSyAuzSGeD_Z5JVDDN9lag6XjtE3D7KFnmSM",
  authDomain: "chat-1db08.firebaseapp.com",
  projectId: "chat-1db08",
  storageBucket: "chat-1db08.firebasestorage.app",
  messagingSenderId: "238283044130",
  appId: "1:238283044130:web:136bc9dcfcc93f0979a17b",
  measurementId: "G-R8882SMDQ8"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, addDoc }; // ✅ export addDoc

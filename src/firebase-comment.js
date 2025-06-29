import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuzSGeD_Z5JVDDN9lag6XjtE3D7KFnmSM",
  authDomain: "chat-1db08.firebaseapp.com",
  projectId: "chat-1db08",
  storageBucket: "chat-1db08.firebasestorage.app",
  messagingSenderId: "238283044130",
  appId: "1:238283044130:web:136bc9dcfcc93f0979a17b",
  measurementId: "G-R8882SMDQ8"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };
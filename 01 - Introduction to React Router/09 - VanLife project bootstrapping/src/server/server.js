import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAMZdqWiJbI673llrHp-0KDTAw93lBksW4",
  authDomain: "vanlife-e43fb.firebaseapp.com",
  projectId: "vanlife-e43fb",
  storageBucket: "vanlife-e43fb.appspot.com",
  messagingSenderId: "1061087530829",
  appId: "1:1061087530829:web:480021918e56cf9c2a7104",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const vansCollectionRef = collection(db, "vans");
export const usersRef = collection(db, "users");

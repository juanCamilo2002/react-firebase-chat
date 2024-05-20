import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-cb749.firebaseapp.com",
  projectId: "reactchat-cb749",
  storageBucket: "reactchat-cb749.appspot.com",
  messagingSenderId: "587173243544",
  appId: "1:587173243544:web:f34ceec5b156eafd5e7eed"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

import "firebase/storage";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAXKsJCcjcOzhFXJ0a-2FLUFypsY-K3gCY",
  authDomain: "facebook-2-yt-1a04d.firebaseapp.com",
  projectId: "facebook-2-yt-1a04d",
  storageBucket: "facebook-2-yt-1a04d.appspot.com",
  messagingSenderId: "1089397148526",
  appId: "1:1089397148526:web:2814d392f5fa188ae30f7f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

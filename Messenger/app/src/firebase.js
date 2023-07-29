
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDlHbiYzQ07Fgsg-LCFg_hPwub-OHQN_Qk",
  authDomain: "messenger-da775.firebaseapp.com",
  projectId: "messenger-da775",
  storageBucket: "messenger-da775.appspot.com",
  messagingSenderId: "558761971641",
  appId: "1:558761971641:web:bf82ae424fd8b68db7b068",
  measurementId: "G-WVB0DYKB4L"
};


const app = initializeApp(firebaseConfig);

const auth = GoogleAuthProvider(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };

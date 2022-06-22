import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4NfshIbapKIWWFbEaYh0CD3YGIXZ5-yg",
  authDomain: "fire-base-task-241e7.firebaseapp.com",
  databaseURL: "https://fire-base-task-241e7-default-rtdb.firebaseio.com",
  projectId: "fire-base-task-241e7",
  storageBucket: "fire-base-task-241e7.appspot.com",
  messagingSenderId: "249939389441",
  appId: "1:249939389441:web:1b4c88a306552515c36400",
  measurementId: "G-B1Z47QTV9T",
};

// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

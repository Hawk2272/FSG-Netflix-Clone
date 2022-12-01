import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD4LXD5IVMvt3ap7MKYQaqFyFvvuTR951c",
  authDomain: "fsg-netflix.firebaseapp.com",
  projectId: "fsg-netflix",
  storageBucket: "fsg-netflix.appspot.com",
  messagingSenderId: "445196069869",
  appId: "1:445196069869:web:2e3a083a356deadc8fd5e4",
  measurementId: "G-FN05GHZPPF"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

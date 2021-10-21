import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDo1VgHHwSinIun9Yg0heY--R7yvKE2lkw",
  authDomain: "blog-test-c39bd.firebaseapp.com",
  projectId: "blog-test-c39bd",
  storageBucket: "blog-test-c39bd.appspot.com",
  messagingSenderId: "1086623073415",
  appId: "1:1086623073415:web:f361aef7734227e87aa422"
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
export const auth = getAuth(firebaseApp);

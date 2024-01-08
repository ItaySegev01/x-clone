// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: 'AIzaSyD8kewRDIKkKL2xuD_GtQ_SuORVPZCSxNs',
  authDomain: 'twitter-clone-410316.firebaseapp.com',
  projectId: 'twitter-clone-410316',
  storageBucket: 'twitter-clone-410316.appspot.com',
  messagingSenderId: '58059259389',
  appId: '1:58059259389:web:c1512a229a02db36fd2d94',
  measurementId: 'G-WJJRYR5C7K',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };

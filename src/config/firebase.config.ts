import 'firebase/firestore';

import { initializeApp } from 'firebase/app';
//import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBUgmiYoySdz0Ywli5vA4TbrRtuNyb7kTI',
  authDomain: 'vamo-marcar.firebaseapp.com',
  projectId: 'vamo-marcar',
  storageBucket: 'vamo-marcar.appspot.com',
  messagingSenderId: '997423425001',
  appId: '1:997423425001:web:de7cfdc2593735f676d778',
  measurementId: 'G-3SFDQ528ZW',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// firebase.initializeApp(app);

// Initialize Cloud Firestore
export const db = getFirestore(app);

// // Initialize GoogleAnalytics
// export const analytics = getAnalytics(app);

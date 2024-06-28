// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {collection, getFirestore} from 'firebase/firestore';
// import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyA7P-awZb8E670o3CUlG2IyPdp6nxAOqts',
  authDomain: 'expensify-4e0ab.firebaseapp.com',
  projectId: 'expensify-4e0ab',
  storageBucket: 'expensify-4e0ab.appspot.com',
  messagingSenderId: '536883184432',
  appId: '1:536883184432:web:4057d0776d758864f7bef5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const tripRef = collection(db, 'trips');
export const expensesRef = collection(db, 'expenses');

export default app;

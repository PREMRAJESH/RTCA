import {initializeApp, getApps, getApp} from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAwdHMG3j_WLLRAGjHfB7PhqQ1JDW-MWsI',
  authDomain: 'rtca-prototype.firebaseapp.com',
  projectId: 'rtca-prototype',
  storageBucket: 'rtca-prototype.firebasestorage.app',
  messagingSenderId: '520112168330',
  appId: '1:520112168330:android:632188427db438267abc73',
};

// Initialize Firebase
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

export {app, auth, firestore, storage};

export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { firebase } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB9H2f891InEMjJUPWwJRnp-evMsVwBHao',
  authDomain: 'auth-app-week8.firebaseapp.com',
  projectId: 'auth-app-week8',
  storageBucket: 'auth-app-week8.firebasestorage.app',
  messagingSenderId: '579321829048',
  appId: '1:579321829048:web:cfa74f74786086146c464d',
  measurementId: 'G-ERP1H9JT5G',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export { auth };

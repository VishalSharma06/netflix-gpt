// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVvSVN75f12vuadRqxdmV7rzU2yh92FUg",
  authDomain: "netflixgpy.firebaseapp.com",
  projectId: "netflixgpy",
  storageBucket: "netflixgpy.appspot.com",
  messagingSenderId: "1099105535297",
  appId: "1:1099105535297:web:2ccbd33a37c6b3eee3cdc0",
  measurementId: "G-94LPWCTSS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
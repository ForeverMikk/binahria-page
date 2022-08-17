// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFlYEeLGLewLUHFel1nJ4m-NDX0PXhoho",
  authDomain: "geiser-boards.firebaseapp.com",
  projectId: "geiser-boards",
  storageBucket: "geiser-boards.appspot.com",
  messagingSenderId: "981516309229",
  appId: "1:981516309229:web:815a25a98806b4668ab2e4",
  measurementId: "G-BCGEH6ZD2S"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// logins

export {app, analytics}

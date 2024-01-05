// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: toString(process.env.FIREBASE_API_KEY),
    authDomain: "e-commerce-app-next.firebaseapp.com",
    projectId: "e-commerce-app-next",
    storageBucket: "e-commerce-app-next.appspot.com",
    messagingSenderId: "257742737543",
    appId: "1:257742737543:web:ac81fa4848f405ce5f2822",
    measurementId: "G-04538MBBK0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp;
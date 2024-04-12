// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC58rrqZOyBaz2aCT5KiNhn6GRmweuWExE",
    authDomain: "cineversehub-7b581.firebaseapp.com",
    projectId: "cineversehub-7b581",
    storageBucket: "cineversehub-7b581.appspot.com",
    messagingSenderId: "386566514605",
    appId: "1:386566514605:web:32d270b08e6b7d1541a324",
    measurementId: "G-WFDTF8WHM8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYnvFf4CRF9c_twVfKMUWM2N2jjp650nA",
  authDomain: "practica-crud-74892.firebaseapp.com",
  projectId: "practica-crud-74892",
  storageBucket: "practica-crud-74892.appspot.com",
  messagingSenderId: "612011430568",
  appId: "1:612011430568:web:59fa850c0a7fbc3bfaa89d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const httpRequest = (method, url) => {

};

export const hello = () => {
    console.log("FIREBASE");
    console.log(app);
    console.log(database);
}
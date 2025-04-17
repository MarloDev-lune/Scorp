// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBb1EHZlBZ6Fuzz8oJEzu92dQRQp82ukuE",
  authDomain: "scorpchat-c2c53.firebaseapp.com",
  projectId: "scorpchat-c2c53",
  storageBucket: "scorpchat-c2c53.firebasestorage.app",
  messagingSenderId: "1057027114582",
  appId: "1:1057027114582:web:9f0b00b920c920a2055df7",
  measurementId: "G-81B2Z87JFJ"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db };

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged  } from  'https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js'
const firebaseConfig = {
  apiKey: "AIzaSyDxpJS79rw1ywSr3v_jS-SRM-gipnVz8B0",
  authDomain: "fir-project-526ce.firebaseapp.com",
  projectId: "fir-project-526ce",
  storageBucket: "fir-project-526ce.firebasestorage.app",
  messagingSenderId: "279323963167",
  appId: "1:279323963167:web:3f6590f9fe99cddc6b4a2a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, onAuthStateChanged }
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBQcfG-W96Hj2UuftgswbwBnaRC6XgSYBU",
    authDomain: "simple-chat-a473f.firebaseapp.com",
    projectId: "simple-chat-a473f",
    storageBucket: "simple-chat-a473f.appspot.com",
    messagingSenderId: "195537414982",
    appId: "1:195537414982:web:23bdfc087e2ed38bda9347"  
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };


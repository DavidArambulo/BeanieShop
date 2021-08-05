import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAXmAMgIl63uhaNQyitwDiLNWa5UraeyhY",
    authDomain: "beanieshop-21934.firebaseapp.com",
    projectId: "beanieshop-21934",
    storageBucket: "beanieshop-21934.appspot.com",
    messagingSenderId: "793241275547",
    appId: "1:793241275547:web:8f3a500e182891cf278a3e"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
    return app;
}

export const database = firebase.firestore();
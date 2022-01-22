import firebase from 'firebase/app';
import "@firebase/firestore";
// Your web app's Firebase configuration

const app = firebase.initializeApp({
    apiKey: "AIzaSyC8DeWJ92ggWqfLR-3r__lRiAwdjdpQXuE",
    authDomain: "ecommerce-emust.firebaseapp.com",
    projectId: "ecommerce-emust",
    storageBucket: "ecommerce-emust.appspot.com",
    messagingSenderId: "967480614218",
    appId: "1:967480614218:web:1ec0d09ed7d5fa82f935b3"
});

export const getFirestore = () => {
    return firebase.firestore(app);
}
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
    apiKey: "AIzaSyDWgAF8b4qJcRJ11hgUiTE_KQRx_Xc3sOA",
    authDomain: "transporeon-b5417.firebaseapp.com",
    databaseURL: "https://transporeon-b5417.firebaseio.com",
    projectId: "transporeon-b5417",
    storageBucket: "transporeon-b5417.appspot.com",
    messagingSenderId: "161867115545",
    appId: "1:161867115545:web:b8f2d41425be8203404e88",
    measurementId: "G-6X1NPF53Q9"
})
// const analytics = firebase.analytics();


export default firebase;
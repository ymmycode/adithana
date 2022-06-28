import firebase from 'firebase/compat/app'

const firebaseConfig = {
    apiKey: "AIzaSyBPVHb-30zs7ZHoFVN6ujsdcHOO8pY7YNo",
    authDomain: "adithana-54780.firebaseapp.com",
    databaseURL: "https://adithana-54780-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "adithana-54780",
    storageBucket: "adithana-54780.appspot.com",
    messagingSenderId: "67196985678",
    appId: "1:67196985678:web:f5c843c869ab6049b63e1f",
    measurementId: "G-E8VFN8QY88"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
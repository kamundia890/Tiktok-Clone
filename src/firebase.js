import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBZ_YIVUqvFmXeKyMFu-qAOrpIPraAwlMg",
    authDomain: "tiktok-d87d2.firebaseapp.com",
    databaseURL: "https://tiktok-d87d2.firebaseio.com",
    projectId: "tiktok-d87d2",
    storageBucket: "tiktok-d87d2.appspot.com",
    messagingSenderId: "856042762338",
    appId: "1:856042762338:web:9da0b9ba6293012709a13b",
    measurementId: "G-DRLW7D48ND"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
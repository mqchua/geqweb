import firebase from "firebase/app"

const config = firebase.initializeApp({
    apiKey: "AIzaSyDLuDWnn-72rA3Ftcq7mXl7kBEBsPC3hXA",
    authDomain: "mqproj.firebaseapp.com",
    databaseURL: "https://mqproj-default-rtdb.firebaseio.com/",
    projectId: "mqproj",
    storageBucket: "mqproj.appspot.com",
    messagingSenderId: "489864200107",
    appId: "1:489864200107:web:3ceecdd2d234e271475cee"
})

export default config
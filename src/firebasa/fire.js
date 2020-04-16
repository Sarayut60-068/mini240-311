import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyADl0VGdoA45liNiderICdVjgIxwlSEtLk",
  authDomain: "myappjan.firebaseapp.com",
  databaseURL: "https://myappjan.firebaseio.com",
  projectId: "myappjan",
  storageBucket: "myappjan.appspot.com",
  messagingSenderId: "576012620890",
  appId: "1:576012620890:web:ca4f73772d3ec801013463",
  measurementId: "G-QWBKMXG31B"
};

const fire = firebase.initializeApp(firebaseConfig)

export default fire
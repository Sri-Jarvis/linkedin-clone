import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDJ4Gh5TvKEsjNOF2Sbu7_gkt5jHYv-jS8",
  authDomain: "linkedin-clone-yt-bbf2a.firebaseapp.com",
  projectId: "linkedin-clone-yt-bbf2a",
  storageBucket: "linkedin-clone-yt-bbf2a.appspot.com",
  messagingSenderId: "617371228688",
  appId: "1:617371228688:web:42a2da205bb31515584895",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };

export default db;

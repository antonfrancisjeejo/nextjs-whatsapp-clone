import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBPxjXwc4JVf9tmwaHsGdo-OpgIPNqz0Vg",
  authDomain: "nextjs-whatsappclone.firebaseapp.com",
  projectId: "nextjs-whatsappclone",
  storageBucket: "nextjs-whatsappclone.appspot.com",
  messagingSenderId: "7093576142",
  appId: "1:7093576142:web:67b61de5748280aed80b9f",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

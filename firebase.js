import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAWfT1pnN3Zia906HVo1UyGu-JdJRirKlY",
  authDomain: "whatsapp-clone-nextjs-69621.firebaseapp.com",
  projectId: "whatsapp-clone-nextjs-69621",
  storageBucket: "whatsapp-clone-nextjs-69621.appspot.com",
  messagingSenderId: "860195106828",
  appId: "1:860195106828:web:dd093436303ffd2922be29",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

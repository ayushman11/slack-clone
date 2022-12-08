import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAKln3ON0IEY0Kc3oCkrZ_-b19JMcixKxE",
  authDomain: "slack-clone-fe5cc.firebaseapp.com",
  projectId: "slack-clone-fe5cc",
  storageBucket: "slack-clone-fe5cc.appspot.com",
  messagingSenderId: "334523974469",
  appId: "1:334523974469:web:1c1320a669c955e9bff42c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };

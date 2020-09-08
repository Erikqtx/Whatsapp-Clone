import firebase from "firebase";
//firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9fgFR5beihGtMSvKNEcRGq5X4q1QDRzw",
  authDomain: "whatsapp-clone-8228d.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-8228d.firebaseio.com",
  projectId: "whatsapp-clone-8228d",
  storageBucket: "whatsapp-clone-8228d.appspot.com",
  messagingSenderId: "60259138940",
  appId: "1:60259138940:web:5a39066b77d0a4461f78f9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

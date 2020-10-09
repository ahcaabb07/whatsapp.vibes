import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAaoZ8bxdoH0QDPUPo6hTza9dA6sVpe1XQ",
  authDomain: "whatsapp-mern-a6125.firebaseapp.com",
  databaseURL: "https://whatsapp-mern-a6125.firebaseio.com",
  projectId: "whatsapp-mern-a6125",
  storageBucket: "whatsapp-mern-a6125.appspot.com",
  messagingSenderId: "935135538740",
  appId: "1:935135538740:web:43ea73eb1e682d88196461",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;

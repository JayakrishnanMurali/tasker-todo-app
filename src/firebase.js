import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyDBNqWx5_9iRWgcDMeD3btdx52UwiEx4H8",
  authDomain: "tasker-io-267c8.firebaseapp.com",
  projectId: "tasker-io-267c8",
  storageBucket: "tasker-io-267c8.appspot.com",
  messagingSenderId: "865234839448",
  appId: "1:865234839448:web:535e97a06ca799b8c0eded",
  measurementId: "G-Y6L09KL1QW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

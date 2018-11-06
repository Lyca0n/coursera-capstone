import * as firebase from 'firebase';
/*
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
*/
const config = {
  apiKey: "AIzaSyDzTuW1WpGXFn7xkwC9Xb3vQgE420q0o5Q",
  authDomain: "wishim-df0a2.firebaseapp.com",
  databaseURL: "https://wishim-df0a2.firebaseio.com",
  projectId: "wishim-df0a2",
  storageBucket: "wishim-df0a2.appspot.com",
  messagingSenderId: "1030689276032"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

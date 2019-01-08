import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
var config = {
  apiKey: "AIzaSyCzLa3d9HipQNgqylJ3R3xgCv9DabXDIbQ",
  authDomain: "react-slack-clone-37104.firebaseapp.com",
  databaseURL: "https://react-slack-clone-37104.firebaseio.com",
  projectId: "react-slack-clone-37104",
  storageBucket: "react-slack-clone-37104.appspot.com",
  messagingSenderId: "141651272709"
};
firebase.initializeApp(config);

export default firebase;

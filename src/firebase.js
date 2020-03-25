import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { authState } from "rxfire/auth";
import { collectionData } from "rxfire/firestore";
import { map } from "rxjs/operators";

const firebaseConfig = {
  apiKey: "AIzaSyAU4xCVR44CNgsB47ljWvWb_yrmyW_VpAQ",
  authDomain: "sps-team13-project.firebaseapp.com",
  databaseURL: "https://sps-team13-project.firebaseio.com",
  projectId: "sps-team13-project",
  storageBucket: "sps-team13-project.appspot.com",
  messagingSenderId: "269392308456",
  appId: "1:269392308456:web:7034cfde90be232555c15d",
  measurementId: "G-5T1FXGLQ9F"
};

const app = firebase.initializeApp(firebaseConfig);

const _auth = firebase.auth();
const _firestore = firebase.firestore();
const _loggedIn$ = authState(_auth).pipe(map(user => (user ? user : null)));

export default firebase;
export { app, _auth, _firestore, collectionData, _loggedIn$ };

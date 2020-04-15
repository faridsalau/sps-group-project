import fbConfig from "./fbConfig.js";
import { authState } from "rxfire/auth";
import { collectionData } from "rxfire/firestore";
import { map } from "rxjs/operators";

let auth;
let firestore;
let loggedIn$;

const getFirestore = async () => {
  if (process.browser) {
    return window.db;
  }
  const firebase = await import("firebase");
  if (firebase.apps.length === 0) {
    let app = firebase.initializeApp(fbConfig);
    return app.firestore();
  } else {
    return firebase.apps[0].firestore();
  }
};

firestore = getFirestore();

if (process.browser) {
  loggedIn$ = authState(auth).pipe(map(user => (user ? user : null)));
}

export { firestore, collectionData, loggedIn$ };

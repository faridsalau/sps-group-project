import fbConfig from "./fbConfig.js";

let firestore;

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

export { firestore };

import * as sapper from "@sapper/app";
import fbConfig from "./fbConfig.js";

let app = firebase.initializeApp(fbConfig);
window.db = app.firestore();
window.auth = app.auth();

sapper.start({
  target: document.querySelector("#sapper")
});

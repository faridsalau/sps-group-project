const admin = require("firebase-admin");

import fbAdminConfig from "./fbAdminConfig";

admin.initializeApp({
  credential: admin.credential.cert(fbAdminConfig),
  databaseURL: "https://sps-team13-project.firebaseio.com"
});

export default admin;

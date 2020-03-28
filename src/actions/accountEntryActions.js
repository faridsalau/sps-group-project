import { trimObjValues } from "../util/utilFunctions.js";

export const signup = newUserData => {
  return new Promise((resolve, reject) => {
    const alreadyFoundError = new Error("usernameAlreadyExists");
    const newUser = trimObjValues(newUserData);
    if (window.db) {
      const db = window.db;
      const auth = window.auth;
      db.doc(`/users/${newUser.username}`)
        .get()
        .then(doc => {
          if (doc.exists) {
            throw alreadyFoundError;
          } else {
            return auth.createUserWithEmailAndPassword(
              newUser.email,
              newUser.password
            );
          }
        })
        .then(data => {
          const userCredentials = {
            userId: data.user.uid,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            username: newUser.username,
            createdAt: new Date().toISOString()
          };
          return db.doc(`/users/${newUser.username}`).set(userCredentials);
        })
        .catch(err => {
          let error = "Something went wrong, please try again";
          if (err === alreadyFoundError) {
            error = "An account with this username already exists";
          }
          if (err.code === "auth/email-already-in-use") {
            error = "An account with this email already exists";
          }
          reject(error);
        });
    } else {
      reject("Something went wrong, please try again");
    }
  });
};

export const login = userData => {
  return new Promise((resolve, reject) => {
    const user = trimObjValues(userData);
    if (window.auth) {
      const auth = window.auth;
      auth
        .signInWithEmailAndPassword(user.email, user.password)
        .then(() => {
          resolve(alert("Logged In"));
        })
        .catch(() => {
          reject("Wrong credentials, please try again");
        });
    } else {
      reject("Something went wrong, please try again");
    }
  });
};

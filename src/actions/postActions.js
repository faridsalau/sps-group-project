import { user, iFeelYous } from "../stores.js";
import { collectionData } from "rxfire/firestore";
import { map } from "rxjs/operators";

// TODO: Conditionally add username to posts
export const createPost = (title, bodySummary, formattedBody) => {
  return new Promise((resolve, reject) => {
    if (window.db) {
      const db = window.db;
      let currentUser;
      user.subscribe((user) => {
        currentUser = user;
      });

      if (currentUser) {
        let newPost = {
          formattedBody: formattedBody.trim(),
          bodySummary: bodySummary.trim(),
          title: title.trim(),
          createdAt: new Date().toISOString(),
          username: currentUser.displayName,
          iFeelYouCount: 0,
          commentCount: 0,
        };

        db.collection("posts")
          .add(newPost)
          .then(() => {
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      }
    }
  });
};
export const updatePost = (title, bodySummary, formattedBody, documentID) => {
    if (window.db) {
      const db = window.db;
      let currentUser;
      user.subscribe((user) => {
        currentUser = user;
      });
      if (currentUser) {
        let updatedPost = {
          formattedBody: formattedBody.trim(),
          bodySummary: bodySummary.trim(),
          title: title.trim(),
          updateAt: new Date().toISOString(),
        };
      db.collection("posts").document(documentID).update(updatedPost);
      }
    }
};

export const deleteDocument = (documentID, collection) => {
  if (window.db) {
    const db = window.db;
    db.collection(collection).document(documentID).delete();
    }
};

export const getAllPosts = async () => {
  const { firestore } = await import("../firebase.js");
  const db = await firestore;
  const postsRef = db.collection("posts");
  const query = postsRef.orderBy("createdAt", "desc");
  return new Promise((resolve, reject) => {
    collectionData(query, "postId").subscribe((posts) => {
      resolve(posts);
    });
  });
};

export const hasFeltPost = (postId) => {
  let feltPosts;
  iFeelYous.subscribe((iFeelYous) => {
    feltPosts = iFeelYous;
  });

  if (feltPosts && feltPosts.find((feltPost) => feltPost.postId === postId)) {
    return true;
  } else {
    return false;
  }
};

export const addIFeelYou = (postId) => {
  return new Promise((resolve, reject) => {
    if (window.db) {
      const db = window.db;
      let currentUser;
      user.subscribe((user) => {
        currentUser = user;
      });

      const iFeelYouDocument = db
        .collection("iFeelYous")
        .where("username", "==", currentUser.displayName)
        .where("postId", "==", postId)
        .limit(1);

      const postDocument = db.doc(`/posts/${postId}`);
      let postData;

      postDocument
        .get()
        .then((doc) => {
          if (doc.exists) {
            postData = doc.data();
            postData.postId = postId;
            return iFeelYouDocument.get();
          } else {
            reject("Post not found.");
          }
        })
        .then((data) => {
          if (data.empty) {
            return db
              .collection("iFeelYous")
              .add({
                postId,
                username: currentUser.displayName,
              })
              .then(() => {
                postData.iFeelYouCount++;
                return postDocument.update({
                  iFeelYouCount: postData.iFeelYouCount,
                });
              })
              .then(() => {
                resolve();
              });
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};

export const removeIFeelYou = (postId) => {
  return new Promise((resolve, reject) => {
    if (window.db) {
      const db = window.db;
      let currentUser;
      user.subscribe((user) => {
        currentUser = user;
      });

      const iFeelYouDocument = db
        .collection("iFeelYous")
        .where("username", "==", currentUser.displayName)
        .where("postId", "==", postId)
        .limit(1);

      const postDocument = db.doc(`/posts/${postId}`);
      let postData;

      postDocument
        .get()
        .then((doc) => {
          if (doc.exists) {
            postData = doc.data();
            postData.postId = postId;
            return iFeelYouDocument.get();
          } else {
            reject("Post not found.");
          }
        })
        .then((data) => {
          if (data.empty) {
            reject("Post not liked");
          } else {
            db.doc(`/iFeelYous/${data.docs[0].id}`)
              .delete()
              .then(() => {
                postData.iFeelYouCount--;
                return postDocument.update({
                  iFeelYouCount: postData.iFeelYouCount,
                });
              })
              .then(() => {
                resolve();
              })
              .catch((err) => {
                console.error(err);
              });
          }
        });
    } else {
      reject("Something went wrong, please try again");
    }
  });
};

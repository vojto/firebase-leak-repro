import * as firebase from "@firebase/app";
import * as firestore from "@firebase/firestore";

export const app = firebase.initializeApp({
  projectId: "demo",
});

export const db = firestore.initializeFirestore(app, {});
firestore.connectFirestoreEmulator(db, "localhost", 8080);

/**
 * @jest-environment node
 */

import { db, app } from "./firebase";
import * as firebase from "@firebase/app";
import * as firestore from "@firebase/firestore";

describe("leak", () => {
  it("leaks", async () => {
    const leaksRef = firestore.collection(db, "leaks");
    const leakRef = firestore.doc(leaksRef, "leak" + Math.random());

    await firestore.setDoc(leakRef, { foo: "bar" });

    await firestore.terminate(db);
    await firebase.deleteApp(app);

    global.gc!();
  });
});

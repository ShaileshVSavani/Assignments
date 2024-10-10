

import React from "react";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { app } from "./firebase";

const fireStore = getFirestore(app);

const Store = () => {
  const writeData = async () => {
    const result = await addDoc(collection(fireStore, "cities"), {
      name: "Delhi",
      pincode: 1234,
      lat: 123,
      long: 456,
    });
    console.log("result", result);
  };
 
  const makeSubcollection = async () => {
    const result = await addDoc(
      collection(fireStore, "cities", "WvOr1Ymme8zgIv6K0RwE", "places"),
      {
        name: "place",
        type: "restaurant",
        food: "chinese",
        rating: 4,
      }
    );
    console.log("Sub", result);
  };

  const getDocument = async () => {
    const ref = doc(fireStore, "users", "dXQDniITJFiW55g6qHTo");
    const snap = await getDoc(ref);

    if (snap.exists()) {
      console.log("snap", snap.data());
    } else {
      console.log("No such document!");
    }
  };

  const getDocumentByQuery = async () => {
    console.log("getDocumentByQuery function triggered"); // Add this line
    const collectionRef = collection(fireStore, "users");
    const q = query(collectionRef, where("isMale", "==", true));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      console.log("No matching documents.");
    } else {
      snapshot.forEach((data) => {
        console.log(data.data());
        console.log("getDocumentByQuery clicked");
      });
    }
  };
  const update = async () => { 
    const docRef = doc(fireStore, "users", "dXQDniITJFiW55g6qHTo");
   await updateDoc(docRef, { isMale: true });
    console.log("Document successfully updated!");
  }
  return (
    <div>
      <h2>Firestore</h2>
      <button onClick={writeData}>Write Data</button>
      <button onClick={makeSubcollection}>Make Subcollection</button>
      <button onClick={getDocument}>Get Doc</button>
      <button onClick={getDocumentByQuery}>Get Doc by Query</button>
      <button onClick={update}>Update Document</button>
    </div>
  );
};

export default Store;

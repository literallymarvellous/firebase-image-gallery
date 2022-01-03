import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { projectFirestore } from "../firebase/config";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

export const useFirestore = (collectionName) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const q = query(
      collection(projectFirestore, collectionName),
      orderBy("createdAt", "desc")
    );
    console.log(q);
    const unsub = onSnapshot(
      q,
      (snap) => {
        console.log(snap);
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => unsub();
  }, [collection]);
  return [docs];
};

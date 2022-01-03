import { useState, useEffect } from "react";
import { projectStorage, projectFirestore } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = ref(projectStorage, "images/" + file.name);
    const upload = uploadBytesResumable(storageRef, file);

    upload.on(
      "state_changed",
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await getDownloadURL(upload.snapshot.ref);
        const createdAt = Timestamp.now().toDate();
        try {
          await addDoc(collection(projectFirestore, "images"), {
            url,
            createdAt,
          });
        } catch (err) {
          console.log(error);
        }
        setUrl(url);
      }
    );
  }, [file]);

  return [progress, url, error];
};

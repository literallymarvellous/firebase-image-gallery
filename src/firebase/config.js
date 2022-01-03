import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhGCvezqd2puCTsBEcvKo3-7aRGjRGV44",
  authDomain: "firegram-clone-89b17.firebaseapp.com",
  projectId: "firegram-clone-89b17",
  storageBucket: "firegram-clone-89b17.appspot.com",
  messagingSenderId: "518639288180",
  appId: "1:518639288180:web:fa50f6eec2b007fada7621",
  measurementId: "G-7D4B0LN0KE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const projectStorage = getStorage(app);
export const projectFirestore = getFirestore(app);

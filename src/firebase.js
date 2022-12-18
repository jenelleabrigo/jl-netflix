import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { database } from "firebase/database";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDh8i7obRkcqYhT5MaHUV1HGqlBgzqyWco",
  authDomain: "netflix-clone-463b1.firebaseapp.com",
  databaseURL: "https://netflix-clone-463b1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "netflix-clone-463b1",
  storageBucket: "netflix-clone-463b1.appspot.com",
  messagingSenderId: "8474731759",
  appId: "1:8474731759:web:da435efcee57a7c539271a",
  measurementId: "G-S3NEYN6BEF",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      authProvider: "local",
      email,
    });
  } catch (err) {
    alert(err.message);
  }
};

const logout = async () => {
  await signOut(auth);
};

export { auth, db, registerWithEmailAndPassword, logInWithEmailAndPassword, logout };

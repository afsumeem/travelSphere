import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

//initialize firebase
const initializeFirebase = () => {
    initializeApp(firebaseConfig);
};

export default initializeFirebase;

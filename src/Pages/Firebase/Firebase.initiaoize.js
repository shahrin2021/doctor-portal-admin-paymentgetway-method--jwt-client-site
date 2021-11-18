import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
const firebaseConfigInitialize = ()=>{
  initializeApp(firebaseConfig)
};

export default firebaseConfigInitialize;
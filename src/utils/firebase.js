import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDjQu_Fa6dTAVQQYjsLq25kViLKUVyEWd8",
  authDomain: "contact-app-ab53b.firebaseapp.com",
  databaseURL:
    "https://contact-app-ab53b-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "contact-app-ab53b",
  storageBucket: "contact-app-ab53b.appspot.com",
  messagingSenderId: "329117881804",
  appId: "1:329117881804:web:133259f97dd88ea6307969",
  measurementId: "G-44DRH3BC7X",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

import React, { createContext } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXHa_l9WZCeGAkcVoR-Cdevtnk6FXaKKI",
  authDomain: "auth-5cb0d.firebaseapp.com",
  projectId: "auth-5cb0d",
  storageBucket: "auth-5cb0d.appspot.com",
  messagingSenderId: "6869214884",
  appId: "1:6869214884:web:42cbc14e826b08cbd5a831",
  measurementId: "G-PKS69K7HQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const authContext = createContext(null)

const db = getFirestore(app)

const AuthContextProvider = ({children}) => {

  return(
    <authContext.Provider 
    value={
      {
        auth, db, 
      }
    }>
      {children}
    </authContext.Provider>
  )

}

export default AuthContextProvider

export const getCookie = (name) => {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}




import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

import React, { createContext } from "react";
// import { ref, set, update, remove, child } from 'firebase/database'
import { getDatabase, ref, set } from "firebase/database";



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

// Initialize Realtime Database and get a reference to the service


const writeUserData = (userId, name, email, imageUrl) => {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}



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




import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import React, { createContext } from "react";
// import { ref, set, update, remove, child } from 'firebase/database'
import { child, getDatabase, onValue, push, ref, remove, set, update } from "firebase/database";
import { uid } from "uid";



const firebaseConfig = {
  apiKey: "AIzaSyCLubEB1J1SgkKorXnRCMD7COzPFDa0bkg",
  authDomain: "admin-panel-test-23fbb.firebaseapp.com",
  databaseURL: "https://admin-panel-test-23fbb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "admin-panel-test-23fbb",
  storageBucket: "admin-panel-test-23fbb.appspot.com",
  messagingSenderId: "223005006928",
  appId: "1:223005006928:web:fa910c8b4ebf3d1f3b4555"
};


// const firebaseConfig = {
//   apiKey: "AIzaSyCXHa_l9WZCeGAkcVoR-Cdevtnk6FXaKKI",
//   authDomain: "auth-5cb0d.firebaseapp.com",
//   projectId: "auth-5cb0d",
//   storageBucket: "auth-5cb0d.appspot.com",
//   messagingSenderId: "6869214884",
//   appId: "1:6869214884:web:42cbc14e826b08cbd5a831",
//   measurementId: "G-PKS69K7HQZ",
//   databaseURL: "https://auth-5cb0d-default-rtdb.firebaseio.com/"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getDatabase(app);

export const authContext = createContext(null)


// Initialize Realtime Database and get a reference to the service



//POST
export const writeUserData = (  name, surname, age ) => {
  // const userId = push(child(ref(db), 'students'));

  const studentsRef = db.ref("students")
  const newStudentsRef = studentsRef.push() 
  console.log(name, surname);
  const uuid = uid()
  newStudentsRef.set(
  JSON.stringify(
    {
      name,
      surname,
      age,
      id: name,
    }
  )
  ).then((data) => {console.log(data)})

  //или то что снизу
  // data.id = userId
  // set(ref(db, 'users/' + userId),data)
}


// UPDATE
const changeUserData = (id, data) => {
  // у пользователя есть айди берешь его и передаешь сюда
  //data это обьект и если допустим там будет name:'newNmae' то он изменит свойство name на newName
  update(ref(db, 'users/' + id), data);
}

// DELETE
export const deletes = (id) => {
  remove(ref(db, `users/${id}`));
}

// GET
export const getUserData = () => {
  const dbRef = ref(db, 'users/');
  onValue(dbRef, (snapshot) => {
    console.log(snapshot.val())
  })
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




import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import React, { createContext } from "react";
import { child, getDatabase, onValue, push, ref, remove, set, update } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCXHa_l9WZCeGAkcVoR-Cdevtnk6FXaKKI",
  authDomain: "auth-5cb0d.firebaseapp.com",
  databaseURL: "https://auth-5cb0d-default-rtdb.firebaseio.com",
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
export const db = getDatabase(app);

export const authContext = createContext(null)


//POST
export const writeUserData = ( imageURL, name, surname, age ) => {

  const db = getDatabase();
  const userID = push(child(ref(db),'students')).key 
  let dataOfStudent = {
    imageURL: imageURL,
    name, surname, age
  }
  dataOfStudent["userID"] = userID;

  set(ref(db,'students/' + userID), dataOfStudent)
  console.log(dataOfStudent);
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
export const getStudents = (setStudents) => {
  const dbRef = ref(db, 'students')
   onValue(dbRef, (snapshot) => {
    setStudents(Object.values(snapshot.val())) 
  })
  return
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

// export const getCookie = (name) => {
//   var value = "; " + document.cookie;
//   var parts = value.split("; " + name + "=");
//   if (parts.length === 2) return parts.pop().split(";").shift();
// }




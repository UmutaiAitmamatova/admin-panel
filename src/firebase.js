import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import React, { createContext } from "react";
import { child, getDatabase, onValue, push, ref, remove, set, update } from "firebase/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyCXHa_l9WZCeGAkcVoR-Cdevtnk6FXaKKI",
//   authDomain: "auth-5cb0d.firebaseapp.com",
//   databaseURL: "https://auth-5cb0d-default-rtdb.firebaseio.com",
//   projectId: "auth-5cb0d",
//   storageBucket: "auth-5cb0d.appspot.com",
//   messagingSenderId: "6869214884",
//   appId: "1:6869214884:web:42cbc14e826b08cbd5a831",
//   measurementId: "G-PKS69K7HQZ"
// };
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
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getDatabase(app);

export const authContext = createContext(null)


//POST
export const writeUserData = (imageURL, name, surname, age, group ,classs ) => {
  const db = getDatabase();
  const userID = push(child(ref(db),'students')).key 
  let dataOfStudent = {
    imageURL,
    name, 
    surname, 
    age, 
    group
  }
  dataOfStudent["userID"] = userID;

  set(ref(db,'students/' + userID), dataOfStudent)
}

// UPDATE
export const changeUserDate = (student, studentID) => {
  update(ref(db, `students/${studentID}`), student);
}

// DELETE
export const deletes = (id) => {
  remove(ref(db, `students/${id}`));
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
    value={{auth, db,}}>
      {children}
    </authContext.Provider>
  )
}
export default AuthContextProvider





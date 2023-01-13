// import { child, getDatabase, onValue, push, ref, remove, set, update } from "firebase/database";
// import { AuthContext } from "../../Auth";
// import app from '../configs/firebase'

// export const db = getDatabase(app);

// //POST
// export const createStudent = (imageURL, name, surname, age, group, classs) => {
//     const db = getDatabase();
//     const userID = push(child(ref(db), 'students')).key
//     let dataOfStudent = {
//         imageURL,
//         name,
//         surname,
//         age,
//         group,
//         classs
//     }
//     dataOfStudent["userID"] = userID;

//     set(ref(db, 'students/' + userID), dataOfStudent)
// }

// // UPDATE
// export const updateStudent = (student, studentID) => {
//     update(ref(db, `students/${studentID}`), student);
// }

// // DELETE
// export const deleteStudent = (id) => {
//     remove(ref(db, `students/${id}`));
// }

// // GET
// export const getStudents = (setStudents) => {
//     const dbRef = ref(db, 'students')
//     onValue(dbRef, (snapshot) => {
//         setStudents(Object.values(snapshot.val()))
//     })
//     return
// }

// const AuthContextProvider = ({children}) => {
//     return(
//       <uthContext.Provider 
//       value={{auth, db,}}>
//         {children}
//       </uthContext.Provider>
//     )
//   }
//   export default AuthContextProvider
import React from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import  { auth } from '../firebase';


const UseLogin = () => {
    const [users, setUsers] = React.useState(null);
     
    React.useEffect(()=> {
        const Listen = onAuthStateChanged(auth, user => {
            setUsers({
                id: user.uid,
                name: user.name,
                surName: user.SurName,
                photoURL: user.photoURL
            })
        })
        return () => Listen()
    }, [])

}

export default UseLogin;

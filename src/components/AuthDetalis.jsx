import { onAuthStateChanged, signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase';

const AuthDetalis = () => {
    const [authUser, setAuthUser] = React.useState(null);

    React.useEffect(()=>{
        const listen = onAuthStateChanged(auth, (user)=>{
            if(user){
                setAuthUser(user);
            }else{
                setAuthUser(null);
            }
        })
        return () => {
            listen();
        }
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('sign out successful');
        }).catch(error => console.log(error));
    }
    return (
        <div>{authUser ? <><p>{`Signed In as ${authUser.email}`}</p> <button onClick={userSignOut}>Sign Out</button></> : <p>Signed Out</p>}</div>
    );
}

export default AuthDetalis;

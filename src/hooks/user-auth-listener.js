/* eslint-disable prettier/prettier */
import {useEffect, useState, useContext} from 'react';
import FirebaseContext from '../context/firebase';

export default function User() {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authuser')));
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {

        //  get the current user is by setting an observer on the Auth object:
        const listener = firebase.auth().onAuthStateChanged((authuser) => {
            // if we have user than you can store it in localstorage
            if(authuser){
                localStorage.setItem('authuser', JSON.stringify(authuser));
                setUser(authuser);
            }
            // else current user is null
            else {
                localStorage.removeItem('authuser');
                setUser(null);
            }
        });
        // clear the interval to avoid memory leaks
        return () => listener();

    }, [firebase]);

    return ( user );
    
}

// Another way to get the current user

// var user = firebase.auth().currentUser;

// if (user) {
//   // User is signed in.
// } else {
//   // No user is signed in.
// }
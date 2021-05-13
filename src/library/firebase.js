/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  // Cannot provide API-Key;
  apiKey: 'AIzaSyCSIJ0S8y43_QwzMdjc06zNhI4yIgTu-z0',
   authDomain: 'social-media-455de.firebaseapp.com',
   projectId: 'social-media-455de',
   storageBucket: 'social-media-455de.appspot.com',
   messagingSenderId: '1051131862071',
   appId: '1:1051131862071:web:f7d13f5c1e8fc486c5f3b2',
   measurementId: 'G-1RW39SPX4S'

};

// const firebase = Firebase.initializeApp(config);
// const auth = firebase.auth();
// const { FieldValue } = Firebase.firestore;


const firebase = Firebase.initializeApp(config);
const auth = firebase.auth();
const { FieldValue } = Firebase.firestore;


// =====  SIGN-IN WITH Google =====
export function signInWithGoogle() {
    const provider = new Firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  
  export function signInWithFacebook() {
    const provider = new Firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider);
  }

export { firebase, FieldValue};

















// =====  SIGN-IN WITH GOOGLE =====
// export const auth = firebase.auth();
// const googleProvider = new firebase.auth.GoogleAuthProvider();
// export const signInWithGoogle = () => {
//   auth.signInWithPopup(googleProvider).then((res) => {
//     console.log(res.user)
//   }).catch((error) => {
//     console.log(error.message)
//   })
// }
// export function signInWithGoogle() {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   auth.signInWithPopup(provider);
// }

// apiKey: 'AIzaSyCSIJ0S8y43_QwzMdjc06zNhI4yIgTu-z0',
//   authDomain: 'social-media-455de.firebaseapp.com',
//   projectId: 'social-media-455de',
//   storageBucket: 'social-media-455de.appspot.com',
//   messagingSenderId: '1051131862071',
//   appId: '1:1051131862071:web:f7d13f5c1e8fc486c5f3b2',
//   measurementId: 'G-1RW39SPX4S
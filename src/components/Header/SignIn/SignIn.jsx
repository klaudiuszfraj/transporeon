import React from 'react';
import style from './SignIn.module.scss'
import firebase from "../../../firebase";


function SignIn() {
    const auth = firebase.auth();
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
    }
 return !auth.currentUser && (
  <div className={style.SignIn}>
   <button onClick={signInWithGoogle}>Sign in with Google</button>
  </div>
 );
}
export default SignIn;
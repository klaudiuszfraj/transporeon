import React from 'react';
import style from './SignOut.module.scss'
import firebase from "../../../firebase";

function SignOut() {
    const auth = firebase.auth();
    return auth.currentUser && (
        <div className={style.SignOut}>
            <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    );
}

export default SignOut;
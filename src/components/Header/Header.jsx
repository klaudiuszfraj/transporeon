import React, {useState, useEffect} from 'react';
import style from './Header.module.scss';
import classNames from 'classnames';
import {ReactComponent as TransporeonLogo} from '../../assets/transporeon_logo.svg';
import Navigation from "./Navigation/Navigation";
import Hamburger from "./Hamburger/Hamburger";
import SignIn from "./SignIn/SignIn";
import SignOut from "./SignOut/SignOut";

import firebase from "../../firebase";
import {getDataOnce} from "../../functions";


function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const [navLinks, setNavLinks] = useState([])
    const [isLogged, setIsLogged] = useState(false)

    useEffect(()=>{
        const linksRef = firebase.firestore().collection('links');
        getDataOnce(setNavLinks, linksRef)
    },[])
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
    });

    return (
        <>
            <header className={classNames(style.header)}>
                <div className={classNames('container', style.SingInOut)}>
                    <SignIn/>
                    <SignOut/>
                </div>
                <div className={'container'}>
                    <TransporeonLogo/>
                    <Navigation links={navLinks}/>
                    <Hamburger handleShowMenu={setShowMenu}/>
                </div>
            </header>
        </>
    );
}

export default Header;
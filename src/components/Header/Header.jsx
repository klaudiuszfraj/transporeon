import React, {useState} from 'react';
import style from './Header.module.scss';
import classNames from 'classnames';
import {ReactComponent as TransporeonLogo} from '../../assets/transporeon_logo.svg';
import Navigation from "./Navigation/Navigation";
import Hamburger from "./Hamburger/Hamburger";


function Header() {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <>
        <header className={classNames(style.header)}>
            <div className={'container'}>
                <TransporeonLogo/>
                <Navigation/>
                <Hamburger handleShowMenu={setShowMenu}/>
            </div>
        </header>
        </>
    );
}

export default Header;
import React from 'react';
import style from './Header.module.scss';
import classNames from 'classnames';
import {ReactComponent as TransporeonLogo} from '../../assets/transporeon_logo.svg';
import Navigation from "./Navigation/Navigation";


function Header() {
    return (
        <header className={classNames(style.header)}>
            <div className={'container'}>
                <TransporeonLogo/>
                <Navigation/>
            </div>
        </header>
    );
}

export default Header;
import React from 'react';
import style from './Header.module.scss';
import classNames from 'classnames';
import {ReactComponent as TransporeonLogo} from '../../assets/transporeon_logo.svg';


function Header() {
    return (
        <header className={classNames(style.header)}>
            <div className={'container'}>
                <TransporeonLogo/>
                <nav>
                    <a href="##">Platform</a>
                    <a href="##">Products</a>
                    <a href="##">Your Advantages</a>
                    <a href="##">Insights</a>
                    <a href="##">Expertise</a>
                    <a href="##">Carreer</a>
                    <a href="##">About Us</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
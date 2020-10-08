import React, {useState} from 'react';
import style from './Header.module.scss';
import classNames from 'classnames';
import {ReactComponent as TransporeonLogo} from '../../assets/transporeon_logo.svg';
import Navigation from "./Navigation/Navigation";
import Hamburger from "./Hamburger/Hamburger";


function Header() {

    const [showMenu, setShowMenu] = useState(false)
    const links = [
        {
            name: 'Platform',
            href: '#Platform',
        },
        {
            name: 'Products',
            href: '#Products',
        },
        {
            name: 'Your Advantages',
            href: '#YourAdvantages',
        },
        {
            name: 'Insights',
            href: '#Insights',
        },
        {
            name: 'Expertise',
            href: '#Expertise',
        },
        {
            name: 'Carreer',
            href: '#Carreer',
        },
        {
            name: 'About Us',
            href: '#AboutUs',
        }
    ]

    return (
        <>
            <header className={classNames(style.header)}>
                <div className={'container'}>
                    <TransporeonLogo/>
                    <Navigation links={links}/>
                    <Hamburger handleShowMenu={setShowMenu}/>
                </div>
            </header>
        </>
    );
}

export default Header;
import React from 'react';
import style from './Navigation.module.scss';

function Navigation( {links} ) {
 return (
     <nav className={style.Navigation}>
         {links.map(link => (
             <a key={link.name} href={link.href}>{link.name}</a>
         ))}
     </nav>
 );
}
export default Navigation;
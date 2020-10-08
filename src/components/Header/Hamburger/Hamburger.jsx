import React from 'react';
import style from './Hamburger.module.scss'
function Hamburger({handleShowMenu}) {
 return (
  <div className={style.Hamburger} onClick={() => handleShowMenu(prevState => !prevState)}>
   <div className={style.Ham}/>
   <div className={style.Ham}/>
   <div className={style.Ham}/>
  </div>
 );
}
export default Hamburger;
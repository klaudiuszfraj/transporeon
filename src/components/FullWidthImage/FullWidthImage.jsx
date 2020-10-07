import React from 'react';
import style from './FullWidthImage.module.scss'
function FullWidthImage( {imgSrc}) {
 return (
  <section className={style.FullWidthImage}>
      <img src={imgSrc} alt="hero img"/>
  </section>
 );
}
export default FullWidthImage;
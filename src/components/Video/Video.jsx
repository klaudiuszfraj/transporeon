import React from 'react';
import style from './Video.module.scss'

function Video({link}) {
 return (
  <section className={style.Hero}>
      <figure>
          <iframe src={link}>
          </iframe>
      </figure>
  </section>
 );
}
export default Video;
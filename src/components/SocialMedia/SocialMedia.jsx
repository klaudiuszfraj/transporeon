import React from 'react';
import style from './SocialMedia.module.scss';
function SocialMedia() {
 return (
  <div className={style.SocialMedia}>
      <a href="linkedIn">
          <img src="https://www.transporeon.com/fileadmin/expertise/insights/special/Trucker_heroes/Linkedin.jpg" alt="linkedIn"/>
      </a>
      <a href="Facebook">
          <img src="https://www.transporeon.com/fileadmin/expertise/insights/special/Trucker_heroes/Facebook.jpg" alt="Facebook"/>
      </a>
      <a href="Instagram">
          <img src="https://www.transporeon.com/fileadmin/expertise/insights/special/Trucker_heroes/Instagram.jpg" alt="Instagram"/>
      </a>
      <a href="Twitter">
          <img src="https://www.transporeon.com/fileadmin/expertise/insights/special/Trucker_heroes/Twitter.jpg" alt="Twitter"/>
      </a>
  </div>
 );
}
export default SocialMedia;
import React from 'react';
import './scss/reset.scss'
import './main.scss';
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import Cards from "./components/Cards/Cards";
import FullWidthImage from "./components/FullWidthImage/FullWidthImage";
import SocialMedia from "./components/SocialMedia/SocialMedia";

function App() {
  return (
    <div className="App">
      <Header/>
      <Video link={'https://www.youtube.com/embed/IJamwjgm6_8'}/>
      <Cards/>
      <FullWidthImage imgSrc={'https://www.transporeon.com/fileadmin/_processed_/a/1/csm_transporeon_kc_tracking_visibilty_722935bae0.jpg'}/>
      <SocialMedia/>
    </div>
  );
}

export default App;

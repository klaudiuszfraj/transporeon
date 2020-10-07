import React from 'react';
import './scss/reset.scss'
import './main.scss';
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import Cards from "./components/Cards/Cards";
import FullWidthImage from "./components/FullWidthImage/FullWidthImage";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import MainArticle from "./components/MainArticle/MainArticle";

function App() {
  return (
    <div className="App">
      <Header/>
      <Video link={'https://www.youtube.com/embed/IJamwjgm6_8'}/>
      <Cards/>
      <FullWidthImage imgSrc={'https://www.transporeon.com/fileadmin/_processed_/a/1/csm_transporeon_kc_tracking_visibilty_722935bae0.jpg'}/>
      <SocialMedia/>
      <MainArticle mainArticle={'During a time when so many of us stayed home to stay safe, thousands of #TruckerHeroes around the world kept their wheels turning. These men and women continued to drive trucks, pilot planes, sail ships, and load cargo in order to keep our supply chains running.'} mainTitle={'What does it mean to be one of our #TruckerHeroes?'}/>
    </div>
  );
}

export default App;

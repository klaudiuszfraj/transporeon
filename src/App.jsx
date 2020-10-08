import React from 'react';
import './scss/reset.scss'
import './main.scss';
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import Cards from "./components/Cards/Cards";
import FullWidthImage from "./components/FullWidthImage/FullWidthImage";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import MainArticle from "./components/Articles/MainArticle/MainArticle";
import SecondaryArticle from "./components/Articles/SecondaryArticle/SecondaryArticle";
import ImgArticle from "./components/Articles/ImgArticle/ImgArticle";
import VideoArticle from "./components/Articles/VideoArticle/VideoArticle";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="App">
      <Header/>
      <Video link={'https://www.youtube.com/embed/IJamwjgm6_8'}/>
      <Cards/>
      <FullWidthImage imgSrc={'https://www.transporeon.com/fileadmin/_processed_/a/1/csm_transporeon_kc_tracking_visibilty_722935bae0.jpg'}/>
      <SocialMedia/>
      <MainArticle mainArticle={'During a time when so many of us stayed home to stay safe, thousands of #TruckerHeroes around the world kept their wheels turning. These men and women continued to drive trucks, pilot planes, sail ships, and load cargo in order to keep our supply chains running.'} mainTitle={'What does it mean to be one of our #TruckerHeroes?'}/>
      <SecondaryArticle mainArticle={'During a time when so many of us stayed home to stay safe, thousands of #TruckerHeroes around the world kept their wheels turning. These men and women continued to drive trucks, pilot planes, sail ships, and load cargo in order to keep our supply chains running.'} mainTitle={'What does it mean to be one of our #TruckerHeroes?'}/>
      <ImgArticle mainArticle={'During a time when so many of us stayed home to stay safe, thousands of #TruckerHeroes around the world kept their wheels turning. These men and women continued to drive trucks, pilot planes, sail ships, and load cargo in order to keep our supply chains running.'} mainTitle={'What does it mean to be one of our #TruckerHeroes?'} imgSrc={'https://www.transporeon.com/fileadmin/general/Project_X/TRS_RTV_Push_Image_ETA_400x420.jpg'}/>
      <ImgArticle isImgRight={true} mainArticle={'During a time when so many of us stayed home to stay safe, thousands of #TruckerHeroes around the world kept their wheels turning. These men and women continued to drive trucks, pilot planes, sail ships, and load cargo in order to keep our supply chains running.'} mainTitle={'What does it mean to be one of our #TruckerHeroes?'} imgSrc={'https://www.transporeon.com/fileadmin/general/Project_X/TRS_RTV_Push_Image_ETA_400x420.jpg'}/>
      <VideoArticle mainArticle={'During a time when so many of us stayed home to stay safe, thousands of #TruckerHeroes around the world kept their wheels turning. These men and women continued to drive trucks, pilot planes, sail ships, and load cargo in order to keep our supply chains running.'} mainTitle={'What does it mean to be one of our #TruckerHeroes?'} videoSrc={'https://www.youtube.com/embed/IJamwjgm6_8'}/>
      <VideoArticle isVideoRight={true} mainArticle={'During a time when so many of us stayed home to stay safe, thousands of #TruckerHeroes around the world kept their wheels turning. These men and women continued to drive trucks, pilot planes, sail ships, and load cargo in order to keep our supply chains running.'} mainTitle={'What does it mean to be one of our #TruckerHeroes?'} videoSrc={'https://www.youtube.com/embed/IJamwjgm6_8'}/>
      <Form/>
        <Footer/>
    </div>
  );
}

export default App;

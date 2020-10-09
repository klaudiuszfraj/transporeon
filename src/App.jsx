import React, { useState,useEffect} from 'react';
import './scss/reset.scss'
import './main.scss';
import { Header, Video, Cards, FullWidthImage, SocialMedia, MainArticle, SecondaryArticle, ImgArticle, VideoArticle, Form, Footer} from "./components";
import firebase from "./firebase";
import {getDataOnce} from "./functions";


function App() {
    const [mainArticle, setMainArticle] = useState([])
    const [secondaryArticle, setSecondaryArticle] = useState([])
    const [imgArticle, setImgArticle] = useState([])
    const [videoArticle, seVideoArticle] = useState([])
    const [fullWidthImageLink, setFullWidthImageLink] = useState([])

    useEffect(()=>{
        const mainArticleRef = firebase.firestore().collection('mainArticle');
        const secondaryArticleRef = firebase.firestore().collection('secondaryArticle');
        const imgArticleRef = firebase.firestore().collection('imgArticle');
        const videoArticleRef = firebase.firestore().collection('videoArticle');
        const fullWidthImageLinkRef = firebase.firestore().collection('fullWidthImageLink');
        getDataOnce(setMainArticle, mainArticleRef)
        getDataOnce(setSecondaryArticle, secondaryArticleRef)
        getDataOnce(setImgArticle, imgArticleRef)
        getDataOnce(seVideoArticle, videoArticleRef)
        getDataOnce(setFullWidthImageLink, fullWidthImageLinkRef)
        //todo::wykożystać
        // firebase.firestore().collection('cards').add(        {
        //     title: 'Meet Andrzej',
        //     cardText: 'Understanding the different regulations accross countries helped me deal with all the daily uncertainties.',
        //     imgSrc: 'https://www.transporeon.com/fileadmin/expertise/insights/special/Trucker_heroes/Trasko_Mikhail.jpg'
        // })
    },[])

  return (
    <div className="App">
      <Header/>
      <Video link={'https://www.youtube.com/embed/IJamwjgm6_8'}/>
      <Cards/>
      <FullWidthImage imgSrc={'https://www.transporeon.com/fileadmin/_processed_/a/1/csm_transporeon_kc_tracking_visibilty_722935bae0.jpg'}/>
      <SocialMedia/>
        {mainArticle.map(article => <MainArticle mainTitle={article.mainTitle} mainArticle={article.mainArticle}/>)}
        {secondaryArticle.map(article => <SecondaryArticle mainTitle={article.mainTitle} mainArticle={article.mainArticle}/>)}
        {imgArticle.map(article => <ImgArticle mainTitle={article.mainTitle} mainArticle={article.mainArticle} isImgRight={article.isImgRight} imgSrc={article.imgSrc}/>)}
        {videoArticle.map(article => <VideoArticle mainTitle={article.mainTitle} mainArticle={article.mainArticle} isVideoRight={article.isVideoRight} videoSrc={article.videoSrc}/>)}
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;

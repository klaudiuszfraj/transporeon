import React, {useState, useEffect} from 'react';
import style from './Cards.module.scss';
import classNames from 'classnames';
import Card from "./Card/Card";
import firebase from "../../firebase";
import {getDataOnce} from "../../functions";

function Cards() {
    const [cardsContent, setCardsContent] = useState([])
    useEffect(()=>{
        const cardsRef = firebase.firestore().collection('cards');
        getDataOnce(setCardsContent, cardsRef)
    },[])

 return (
  <section className={classNames(style.Cards, 'container')}>
      <div className="row">
          <div className="col-3">
              <Card title='Meet Andrzej' cardText='Understanding the different regulations accross countries helped me deal with all the daily uncertainties.' imgSrc='https://www.transporeon.com/fileadmin/expertise/insights/special/Trucker_heroes/Andrzej.jpg'/>
          </div>

          {cardsContent.map((card, index) => (
              <div className="col-3" key={index}>
                  <Card {...card}/>
              </div>
          ))}
      </div>
  </section>
 );
}
export default Cards;
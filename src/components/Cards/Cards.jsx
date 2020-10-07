import React from 'react';
import style from './Cards.module.scss';
import classNames from 'classnames';
import Card from "./Card/Card";

function Cards() {
 return (
  <section className={classNames(style.Cards, 'container')}>
      <div className="row">
          <div className="col-4">
              <Card title='Meet Andrzej' cardText='Understanding the different regulations accross countries helped me deal with all the daily uncertainties.' imgSrc='https://www.transporeon.com/fileadmin/expertise/insights/special/Trucker_heroes/Andrzej.jpg'/>
          </div>
          <div className="col-4">
              <Card title='Meet Andrzej' cardText='Understanding the different regulations accross countries helped me deal with all the daily uncertainties.' imgSrc='https://www.transporeon.com/fileadmin/expertise/insights/special/Trucker_heroes/Andrzej.jpg'/>
          </div>
          <div className="col-4">
              <Card title='Meet Andrzej' cardText='Understanding the different regulations accross countries helped me deal with all the daily uncertainties.' imgSrc='https://www.transporeon.com/fileadmin/expertise/insights/special/Trucker_heroes/Andrzej.jpg'/>
          </div>
          <div className="col-4">
              <Card title='Meet Andrzej' cardText='Understanding the different regulations accross countries helped me deal with all the daily uncertainties.' imgSrc='https://www.transporeon.com/fileadmin/expertise/insights/special/Trucker_heroes/Andrzej.jpg'/>
          </div>
          <div className="col-4">
              <Card title='Meet Andrzej' cardText='Understanding the different regulations accross countries helped me deal with all the daily uncertainties.' imgSrc='https://www.transporeon.com/fileadmin/expertise/insights/special/Trucker_heroes/Andrzej.jpg'/>
          </div>
          <div className="col-4">
              <Card title='Meet Andrzej' cardText='Understanding the different regulations accross countries helped me deal with all the daily uncertainties.' imgSrc='https://www.transporeon.com/fileadmin/expertise/insights/special/Trucker_heroes/Andrzej.jpg'/>
          </div>
      </div>

  </section>
 );
}
export default Cards;
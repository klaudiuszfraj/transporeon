import React from 'react';
import style from './ImgArticle.module.scss';
import classNames from 'classnames';

function ImgArticle({mainTitle, mainArticle, imgSrc}) {
    return (
        <section className={classNames(style.ImgArticle, 'container')}>
            <div className="row">
                <div className={classNames('col-8', style.content)}>
                    <h1>{mainTitle}</h1>
                    <p>{mainArticle}</p>
                </div>
                <div className="col-4">
                    <img src={imgSrc} alt={mainTitle}/>
                </div>
            </div>
        </section>
    );
}

export default ImgArticle;
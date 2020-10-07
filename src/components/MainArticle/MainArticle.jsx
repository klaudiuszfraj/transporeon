import React from 'react';
import style from './MainArticle.module.scss';
import classNames from 'classnames';
import SocialMedia from "../SocialMedia/SocialMedia";

function MainArticle({mainTitle, mainArticle}) {
    return (
        <section className={classNames(style.MainArticle, 'container')}>
            <h1>{mainTitle}</h1>
            <p>{mainArticle}</p>
            <SocialMedia/>
        </section>
    );
}

export default MainArticle;
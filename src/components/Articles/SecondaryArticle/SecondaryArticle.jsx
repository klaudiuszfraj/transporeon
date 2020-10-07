import React from 'react';
import style from './SecondaryArticle.module.scss';
import classNames from 'classnames';

function SecondaryArticle({mainTitle, mainArticle}) {
    return (
        <section className={classNames(style.SecondaryArticle, 'container')}>
            <h1>{mainTitle}</h1>
            <p>{mainArticle}</p>
        </section>
    );
}

export default SecondaryArticle;
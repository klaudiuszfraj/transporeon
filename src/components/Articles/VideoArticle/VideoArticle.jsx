import React from 'react';
import style from './VideoArticle.module.scss';
import classNames from 'classnames';
import Video from "../../Video/Video";

function VideoArticle({mainTitle, mainArticle, videoSrc, isVideoRight}) {
    return (
        <section className={classNames(style.VideoArticle, 'container')}>
            <div className={classNames('row', {'isVideoRight': isVideoRight})}>
                <div className={classNames('col-4', style.content)}>
                    <h1>{mainTitle}</h1>
                    <p>{mainArticle}</p>
                </div>
                <div className="col-8">
                    <Video link={videoSrc}/>
                </div>
            </div>
        </section>
    );
}

export default VideoArticle;
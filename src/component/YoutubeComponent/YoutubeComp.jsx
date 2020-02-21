import React from 'react';
import './Youtubecomp.css';

const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/WtBF_-pLrjE/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDXqFjYI7WPmqvYlDpPwVybUUS4Yg" alt="" />
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YoutubeComp.defaultProps = {
    title: 'default title',
    desc: 'default desc'
}

export default YoutubeComp;
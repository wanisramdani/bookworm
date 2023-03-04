import React from 'react'
import { makeStyles } from '@material-ui/core';

import ReactPlayer from 'react-player'


const useStyles = makeStyles( (theme) => ({
    videoResponsive: {
        "& .ytp-large-play-button ytp-button": {
            width: "30px",
            height: "50px",
            marginLeft: '-15px',
            alignItems: 'center',
            justifyContent: 'center',
        }
    }
    /*
    .video-responsive {
        overflow: hidden;
        padding-bottom: 56.25%;
        position: relative;
        height: 0;
    }

    .video-responsive iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    }
    */

}) );

const YoutubeEmbed = ({ src, title, width, height }) => {
    const classes = useStyles()
    return (
        <div className={classes.videoResponsive}>
            { /*
            <iframe 
                loading='lazy'
                width={width}
                height={height}
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder='0'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={title}
                /> */
            }
            <ReactPlayer
                controls={true}
                playing={true}
                url={src} 
                light={true}
                height={height}
                width={width}
            />

        </div>
    )
}

export default YoutubeEmbed
import { makeStyles } from '@material-ui/core';
import React from 'react'


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

const YoutubeEmbed = ({ embedId, title, width, height }) => {
    const classes = useStyles()
    return (
        <div className={classes.videoResponsive}>
            <iframe 
                width={width}
                height={height}
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder='0'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={title}
                />
                
        </div>
    )
}

export default YoutubeEmbed
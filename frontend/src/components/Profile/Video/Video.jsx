import React from 'react'
import { makeStyles } from '@material-ui/styles'

import YoutubeEmbed from '../../Utils/YoutubeEmbed'

const useStyles = makeStyles( (theme) => ({
    videoContainer:{
        margin: '50px',
        border: '1px solid #c1bbbb',
        filter: 'drop-shadow(-1px 4px 4px #4e4e4e)',
    },

}) )

const Video = ({src, title}) => {
    const classes = useStyles()

    return (
        <div className={classes.videoContainer}> 
            <YoutubeEmbed 
                src={src}
                title={title}
                height='600px'
                width='100%'

            />
        </div>
    )
}

export default Video

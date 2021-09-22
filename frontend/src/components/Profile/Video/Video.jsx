import React from 'react'
import { useMediaQuery } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import YoutubeEmbed from '../../Utils/YoutubeEmbed'

const useStyles = makeStyles( (theme) => ({
    videoContainer:{
        [theme.breakpoints.up('md')]:{
            margin: '50px',
            border: '1px solid #c1bbbb',
            filter: 'drop-shadow(-1px 4px 4px #4e4e4e)',         
        },
       
        [theme.breakpoints.down('md')]:{
            margin: '0',
            width: '500px',
            height: '300px',
            border: '1px solid #c1bbbb',
            filter: 'drop-shadow(-1px 4px 4px #4e4e4e)'
        },
    },

}) )

const Video = ({src, title}) => {
    const classes = useStyles()
    const isMobile = useMediaQuery( (theme) => theme.breakpoints.down('sm') )
    return (
        <div className={classes.videoContainer}> 
            <YoutubeEmbed 
                src={src}
                title={title}
                height={ isMobile ? '300px' : '600px' }
                width='100%'

            />
        </div>
    )
}

export default Video

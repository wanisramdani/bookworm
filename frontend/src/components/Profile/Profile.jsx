import React from 'react'

import { createTheme, ThemeProvider } from '@material-ui/core';
import { Typography, Card, Grid, Paper, Box, CardContent, CardMedia, IconButton } from '@material-ui/core';
import { SkipNext, PlayArrow, SkipPrevious} from '@material-ui/icons';
import { useTheme } from '@material-ui/styles';

/* Third-party */
import AudioPlayer from 'material-ui-audio-player'

/* Local */
import { Breadcrumb } from '../index';
import useStyles from './Styles';
import useStylesAudio from './StylesAudio'

const muiTheme = createTheme({});



const Profile = () => {
    const classes = useStyles()

    return (
        <div className={classes.profileContainer}>
            <Breadcrumb className={classes.breadcrumbSection} />
            <div className={classes.profile}>
                <div className={classes.details}>
                    <Typography variant="h4"> Title </Typography>
                    <Typography> lipsom sth  <b>:KLass</b></Typography>
                    <Typography> lipsom sth  <b>:Author</b></Typography>
                    <Typography> lipsom sth  <b>:Card Type</b></Typography>
                    <Typography> lipsom sth  <b>:Series</b></Typography>
                </div>
                <Box className={classes.audioCard}>
                    <Box className={classes.audioPlayer}>
                        <ThemeProvider theme={muiTheme}>
                            <AudioPlayer 
                                width='520px'
                                variation="primary"
                                order="reverse"
                                download={true}
                                loop={true}
                                timePosition='start'
                                useStyles={useStylesAudio}
                                src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"/>
                        </ThemeProvider>
                    </Box>
                    <Box  className={classes.audioPicture}>
                            <img 
                                height="220" width="220" 
                                alt=''
                                src='https://placeimg.com/380/200/nature' 
                            />
                    </Box>
                    <Box className={classes.audioDetails}>
                        
                        <Grid container justifyContent="space-between" direction="column" spacing={1} >
                            <Paper elevation={4} className={classes.gridContent}>
                                <Typography> lipsom sth  <b>:KLass</b></Typography>
                            </Paper>
                            <Paper elevation={4} className={classes.gridContent}>
                                <Typography> lipsom sth  <b>:Author</b></Typography>
                            </Paper>
                            <Paper elevation={4} className={classes.gridContent}>
                                <Typography> lipsom sth  <b>:Card Type</b></Typography>
                            </Paper >
                            <Paper elevation={4} className={classes.gridContent}>
                                <Typography> lipsom sth  <b>:Series</b></Typography>
                            </Paper >
                        </Grid>
                    </Box>
                </Box>

                <iframe 
                    loading='lazy'
                    width='800' 
                    height='800' 
                    src='https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf'>
                </iframe>
            </div>
        </div>
    )
}



export default Profile

import React from 'react'

import { makeStyles } from '@material-ui/core'

import { createTheme, ThemeProvider } from '@material-ui/core';
import { Typography, Grid, Paper, Box } from '@material-ui/core';
/* Third-party */
import AudioPlayer from 'material-ui-audio-player'

import useStylesAudio from './StylesAudio'

const useStyles = makeStyles( (theme) => ({
    audioCard: {
        display: 'grid',
        margin: '180px',
        marginTop: '50px',
        marginBottom: '90px',
    },
    
    audioPlayer: {
        marginTop: '10px',
        paddingRight: '10px',
        gridColumn: '3/8',
    },
    
    audioPicture: {
        gridRow: '1/3',
    },
    
    audioDetails: {
        width: '516px',
        marginTop: "15px",
        gridColumn: "3/8",
        gridRow: '2/3',
    },
    
    gridContent: {
        cursor: 'pointer',
        "&:hover": {
            background: '#fbeded',
        },
        "&:focus":{
            background: 'red',
        },
        margin: '6px',
        padding: '2px',
        background: '#ffff',
    },
    
}) )

const muiTheme = createTheme({});

const Audio = () => {
    const classes = useStyles()
    return (
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
    )
}

export default Audio

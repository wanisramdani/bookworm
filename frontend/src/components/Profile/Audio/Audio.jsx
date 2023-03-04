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
        [theme.breakpoints.down('md')]:{
            /*justifyContent: 'center',*/
            margin: '0px',
            marginTop: '10px',

        },
    },
    root: {
        direction: 'ltr',
    },
    audioPlayer: {
        marginTop: '10px',
        paddingRight: '10px',
        gridColumn: '3/8',
        [theme.breakpoints.down('md')]:{
            marginTop: '10px',
            paddingRight: '0',
            gridColumn: '1/4',
            gridRow: '2/3',
            width: '400px',
        },
    },
    
    audioPicture: {
        gridRow: '1/3',
        [theme.breakpoints.down('md')]:{
            gridRow: '1/2',
            gridColumn: '1/3',
        },
    },
    
    audioDetails: {
        width: '516px',
        marginTop: "15px",
        gridColumn: "3/8",
        gridRow: '2/3',
        [theme.breakpoints.down('md')]:{
            gridColumn: '1/3',
            gridRow: '3/4',
            width: '400px',
        },
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

const Audio = ({ title, audioSrc, audioImg, audioTitle, audioAuthor, album }) => {
    const classes = useStyles()

    return (
        <Box className={classes.audioCard}>
            <Box className={classes.audioPlayer}>
                <ThemeProvider theme={muiTheme}>
                    <AudioPlayer 
                        classes={{ root: classes.root }}
                        className={classes.root}
                        width='520px'
                        variation="primary"
                        order="reverse"
                        download={true}
                        loop={true}
                        timePosition='start'
                        useStyles={useStylesAudio}
                        src={audioSrc}
                        />
                </ThemeProvider>
            </Box>
            <Box  className={classes.audioPicture}>
                    <img 
                        height="220" width="220" 
                        alt={title}
                        src={audioImg} 
                    />
            </Box>
            <Box className={classes.audioDetails}>
                
                <Grid container justifyContent="space-between" direction="column" spacing={1} >
                    <Paper elevation={4} className={classes.gridContent}>
                        <Typography> {audioTitle}  <strong>:title</strong></Typography>
                    </Paper>
                    <Paper elevation={4} className={classes.gridContent}>
                        <Typography> {audioAuthor}  <b>:Author</b></Typography>
                    </Paper>
                    <Paper elevation={4} className={classes.gridContent}>
                        <Typography> {album} <b>:album</b></Typography>
                    </Paper >

                </Grid>
            </Box>
        </Box>
    )
}

export default Audio

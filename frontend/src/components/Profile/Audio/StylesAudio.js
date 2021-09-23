import { makeStyles } from "@material-ui/core";

export default makeStyles( (theme) => ({
    root: {
        [theme.breakpoints.down('sm')]: {
          width: '100%',
        },
        justifySelf: 'center'
    },
    loopIcon: {
        color: '#675756',
        '&.selected': {
            color: '#6f2924',
        },
        '&:hover': {
            color: '#908382',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    playIcon: {
        color: '#675756',
        '&:hover': {
            color: '#908382',
        },
    },
    replayIcon: {
        color: '#e6e600',
    },
    pauseIcon: {
        color: '#675756',
    },
    volumeIcon: {
        color: 'rgba(0, 0, 0, 0.54)',
    },
    volumeSlider: {
        color: 'black',
    },
    progressTime: {
        color: 'rgba(0, 0, 0, 0.54)',
    },
    downloadsIcon: {
        color: 'rgba(0, 0, 0, 0.54)',
    },
    mainSlider: {
        color: '#3f51b5',
        '& .MuiSlider-rail': {
            color: '#7986cb',
        },
        '& .MuiSlider-track': {
            color: '#3f51b5',
        },
        '& .MuiSlider-thumb': {
            color: '#303f9f',
        },
    },
    
}) )
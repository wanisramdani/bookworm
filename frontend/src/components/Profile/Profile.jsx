import React from 'react'
import { CssBaseline, Typography} from '@material-ui/core';

/* Local */
import { Breadcrumb } from '../index';
import useStyles from './Styles';
import Audio from './Audio/Audio';
import Video from './Video/Video';
import Book from './Book/Book';
import Card from './Card/Card';

const Profile = () => {
    const classes = useStyles()

    return (
        <div className={classes.profileContainer}>
            <CssBaseline />
            <Breadcrumb className={classes.breadcrumbSection} />
            <div className={classes.profile}>
                <div className={classes.details}>
                    <Typography variant="h4"> Title </Typography>
                    <Typography> lipsom sth  <b>:KLass</b></Typography>
                    <Typography> lipsom sth  <b>:Author</b></Typography>
                    <Typography> lipsom sth  <b>:Card Type</b></Typography>
                    <Typography> lipsom sth  <b>:Series</b></Typography>
                </div>
                
                <Audio />

                <Book />

                <Video 
                    src='https://youtu.be/XfcvX0P1b5g'
                    title='bruh'
                />         
                
                <Card />
            </div>
        </div>
    )
}



export default Profile

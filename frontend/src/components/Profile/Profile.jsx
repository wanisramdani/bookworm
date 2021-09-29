import React from 'react'
import { CssBaseline, Typography} from '@material-ui/core';
import { useLocation } from 'react-router-dom'

/* Local */
import { Breadcrumb } from '../index';
import useStyles from './Styles';
import Audio from './Audio/Audio';
import Video from './Video/Video';
import Book from './Book/Book';
import Card from './Card/Card';

import useGet from '../useGet';
import { Loading } from '../index';

const Profile = () => {
    const classes = useStyles()
    const location = useLocation()
    const { data, error, loading } = useGet(location.pathname.substring(1) + '/');
    console.log(data) 

    const ProfileContent = (type) => {
        console.log(type)
        switch (type.type) {
            case 'video':
                return (
                    <Video 
                        src={data.youtube_link}
                        title={data.title}
                    />    
                );
            case 'audio':
                return (<Audio />)
            case 'book':
                return (<Book />)
            case 'praycard':
                return (<Card />)
            default: 
                return 'no data found'
        }
    }
    return (
        <div className={classes.profileContainer}>
            <CssBaseline />
            <Breadcrumb className={classes.breadcrumbSection} />
            <div className={classes.profile}>
                {/* TODO: move details into loading... */}
                    <div className={classes.details}>
                        <Typography variant="h4"> Title </Typography>
                        <Typography> lipsom sth  <b>:KLass</b></Typography>
                        <Typography> {data.author}  <b>:Author</b></Typography>
                        <Typography> lipsom sth  <b>:Card Type</b></Typography>
                        <Typography> lipsom sth  <b>:Series</b></Typography>
                    </div>
                {loading
                    ? <Loading />
                    : <ProfileContent type={location.pathname.split('/')[1]} />
                }
            </div>
        </div>
    )
}



export default Profile

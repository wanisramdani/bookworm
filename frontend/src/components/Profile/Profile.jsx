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
import Fatawi from './Fatawi/Fatawi'

import { useGetData } from '../useGet';
import { Loading, NoData } from '../index';


const Profile = () => {
    const classes = useStyles()
    const location = useLocation()
    const { data, error, loading } = useGetData(location.pathname.substring(1) + '/');
    //const { klassData, klassError, klassLoading } = useGetKlass(data.klass);
    //data.klass[0].split('api')[1].substring(1)
    //const dataLoading = loading ? true : klassLoading ? true : false
    //series.current.forEach( e => console.log(e.title)  )
    //let ser = ''
    //console.log( series.map( e =>  e.title  )) 


    const ProfileContent = (type) => {
        switch (type.type) {
            case 'video':
                return (
                    <Video 
                        src={data.youtube_link}
                        title={data.title}
                    />    
                );
            case 'audio':
                return (
                    <Audio 
                        title={data.title}
                        audioSrc={data.audio_file}
                        audioImg={data.picture}
                        audioTitle={data.audio_title}
                        audioAuthor={data.audio_author}
                        album={data.album}
                    />
                )
            case 'book':
                return (
                        <Book 
                            title={data.title}
                            coverSrc={data.cover}
                            pdfSrc={data.book_pdf}

                        />
                     )
            case 'praycard':
                return (
                    <Card
                        title={data.title}
                        cardSrc={data.cardSrc}
                    />
                    )
            case 'fatawi':
                return (
                    <Fatawi 
                        content={data.content}
                    />
                    )
            default: 
                return <NoData />
        }
    }

    return (
        <div className={classes.profileContainer}>
            <CssBaseline />
            <Breadcrumb className={classes.breadcrumbSection} />

                {/* TODO: move details into loading... */}
                {data === null
                    ? <Loading />
                    :
                    <div className={classes.profile}>
                        <div className={classes.details}>
                            <Typography variant="h4"> {data.title} </Typography>
                            <Typography> {data.author}  <b>:Author</b></Typography>
                            {/* <Typography>  {data.klass.map( (e) => ( e.title ) )} <b>:KLass</b></Typography> */}
                            {/* {category.parent === null ? '' : <Typography> {category.title}  <b>:Card Type</b></Typography> } */}
                        </div>
                        <ProfileContent type={location.pathname.split('/')[1]} />
                    </div>
                }
        </div>
    )
}



export default Profile

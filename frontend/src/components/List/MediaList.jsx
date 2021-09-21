import React, { lazy, useState } from 'react'

import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Box } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { CustomPagination } from '..';

const YoutubeEmbed = lazy( () => import('../Utils/YoutubeEmbed') )

const useStyles = makeStyles( theme => ({
    cardContent: {
        background: '#eee',
        padding: '0',
        "& a":{
            textDecoration: 'none',
            color: '#006737',
            padding: '0',
        },
        "&:last-child":{
            paddingBottom: '0',
        },
    },
}) );

const CardsList = ({item, classes}) => {
    return (
        <Grid item key={item.title} lg={3} sm={6} xs={12}>
            <Card
                key={item.title}
                button
                onClick={ () => console.log("") }
            >   
                <CardMedia
                    component="img"
                    height="180"
                    image={`${item.img}`}    
                    alt={`${item.title}`}
                />
                <CardContent classes={{ root:classes.cardContent }} >
                    <Typography variant="h5" component={Link} to="/">
                        { /* 
                            ** Incase of the title being long
                            ** we display 15 characters
                        */ }
                        {item.title.length > 15 
                            ? item.title.substring(0, 15) + '...' 
                            : item.title
                        } 
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

const VideoList = ({item, classes}) => {
    
    return (
        <Grid item key={item.title} lg={3} sm={6} xs={12}>
            <Card
                key={item.title}
                button
                onClick={ () => console.log("") }
            >   
                <YoutubeEmbed 
                    src="https://youtu.be/c_8cplBi_gE"
                    title={item.title}
                    height="180"
                    width="200"
                />
                <CardContent classes={{ root:classes.cardContent }} >
                    <Typography variant="h5" component={Link} to="/">
                        { /* 
                            ** Incase of the title being long
                            ** we display 15 characters
                        */ }
                        {item.title.length > 15 
                            ? item.title.substring(0, 15) + '...' 
                            : item.title
                        } 
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

const MediaList = ({ cards, video }) => {
    const classes = useStyles();

    const numberOfItemsPerPage = 9;
    const [pageNumber, setPageNumber] = useState(1);
    const [pageCount] = useState(
        Math.ceil(itemData.length / numberOfItemsPerPage)
    );
    const start = (pageNumber - 1) * numberOfItemsPerPage 
    const end = pageNumber * (numberOfItemsPerPage - 1)
    const handleChange = (event, value) => {
        setPageNumber(value);
    };

    return (
        <Grid container justifyContent='center' >
            <Grid item xs={10}>
                <Grid container spacing={2}>
                    {itemData
                        .slice( start, end )
                        .map( (item) => (
                            cards 
                            ? <CardsList item={item} classes={classes}/> 
                            : <VideoList item={item} classes={classes} /> 
                        ) )                        
                    }  
                </Grid>
            </Grid>
          
            <Divider />
          
            <Box component="span">
                <CustomPagination
                    page={pageNumber}
                    count={pageCount}
                    onChange={handleChange}
                />
            </Box>
        </Grid>
    )
}

const itemData = [
    {
      img: 'https://picsum.photos/200',
      title: 'Breakfast',
      author: '@bkristastucchio',
    },
    {
      img: 'https://picsum.photos/200',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://picsum.photos/200',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: 'https://picsum.photos/200',
      title: 'Coffee',
      author: '@nolanissac',
    },
    {
      img: 'https://picsum.photos/200',
      title: 'Hats',
      author: '@hjrc33',
    },
    {
      img: 'https://picsum.photos/200',
      title: 'Honey',
      author: '@arwinneil',
    },
    {
        img: 'https://placeimg.com/380/200/nature',
        title: 'Sea star',
        author: '@peterlaster',
    },
    {
        img: 'https://placeimg.com/380/200/nature',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },

    {
      img: 'https://picsum.photos/200',
      title: 'Basketball',
      author: '@tjdragotta',
    },
    {
      img: 'https://picsum.photos/200',
      title: 'Fern',
      author: '@katie_wasserman',
    },
    {
      img: 'https://picsum.photos/200',
      title: 'Mushrooms',
      author: '@silverdalex',
    },

    {
      img: 'https://placeimg.com/380/200/nature',
      title: 'Bike',
      author: '@southside_customs',
    },
  ];


export default MediaList

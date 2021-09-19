import React, { useState } from 'react'

import { Link } from 'react-router-dom';
import { List, ListItem, Card, CardContent, CardMedia, Typography, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Pagination } from '@material-ui/lab';
import { Box } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import YoutubeEmbed from '../Utils/YoutubeEmbed'
import { CustomPagination } from '..';

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
                onClick={ () => console.log("bruh") }
            >   
                <CardMedia
                    component="img"
                    height="180"
                    src={`${item.img}`}    
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
                onClick={ () => console.log("bruh") }
            >   
                <YoutubeEmbed 
                    src="https://youtu.be/-HKy6AIuHZ0"
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
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Breakfast',
      author: '@bkristastucchio',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      author: '@nolanissac',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      author: '@hjrc33',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      author: '@tjdragotta',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      author: '@katie_wasserman',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      author: '@silverdalex',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      author: '@shelleypauls',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      author: '@peterlaster',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      author: '@southside_customs',
    },
  ];


export default MediaList

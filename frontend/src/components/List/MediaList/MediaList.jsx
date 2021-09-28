import React, { useState, useEffect } from 'react'


import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Box } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { CustomPagination } from '../..';
import axios from "axios";

import ItemList from './ItemList'

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

const MediaList = ({ cards, searchItem }) => {
    const classes = useStyles();
    const [videoData, setVideoData] = useState([])

    const numberOfItemsPerPage = 9;
    const [pageNumber, setPageNumber] = useState(1);
    const [pageCount] = useState(
        Math.ceil(videoData.length / numberOfItemsPerPage)
    );
    const start = (pageNumber - 1) * numberOfItemsPerPage 
    const end = pageNumber * (numberOfItemsPerPage - 1)
    const handleChange = (event, value) => {
        setPageNumber(value);
    };
    const baseURL = "http://127.0.0.1:8000/";

    const loadData = async() => {
        const response = cards ? await axios(`${baseURL}api/praycard/`) : await axios(`${baseURL}api/video/`)
        setVideoData(response.data)
    }

    useEffect( () => {
        loadData()
    }, )

    const filter = (item) => {
        const doesItemExist = item.title.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1
        if (doesItemExist) {
            return item
        }
        return ''
    }
    const filterItemData = videoData.filter( filter ).length > 0 
                ?(videoData.filter(filter)
                    .slice( start, end )
                    .map( (item) => (
                        <ItemList isCard={cards} key={item.id} card  item={item} classes={classes} />
                    ) )            
                )   
                :  <div key={''}> {searchItem} is not found </div> 

    return (
        <Grid container justifyContent='center' >
            <Grid item xs={10}>
                <Grid container spacing={2}>
                    { filterItemData } 
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
      id : 1,
      img: 'https://picsum.photos/200',
      title: 'Breakfast',
      author: '@bkristastucchio',
    },
    {
      id : 2,
      img: 'https://picsum.photos/200',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      id : 3,
      img: 'https://picsum.photos/200',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      id : 4,
      img: 'https://picsum.photos/200',
      title: 'Coffee',
      author: '@nolanissac',
    },
    {
      id : 5,
      img: 'https://picsum.photos/200',
      title: 'Hats',
      author: '@hjrc33',
    },
    {
      id : 6,
      img: 'https://picsum.photos/200',
      title: 'Honey',
      author: '@arwinneil',
    },
    {
      id : 7,
        img: 'https://placeimg.com/380/200/nature',
        title: 'Sea star',
        author: '@peterlaster',
    },
    {
      id : 8,
        img: 'https://placeimg.com/380/200/nature',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },

    {
      id : 9,
      img: 'https://picsum.photos/200',
      title: 'Basketball',
      author: '@tjdragotta',
    },
    {
      id : 10,
      img: 'https://picsum.photos/200',
      title: 'Fern',
      author: '@katie_wasserman',
    },
    {
      id : 11,
      img: 'https://picsum.photos/200',
      title: 'Mushrooms',
      author: '@silverdalex',
    },

    {
      id : 12,
      img: 'https://placeimg.com/380/200/nature',
      title: 'Bike',
      author: '@southside_customs',
    },
  ];


  

export default MediaList

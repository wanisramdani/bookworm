import React, { useState, useEffect } from 'react'
import { Grid, Box, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import axios from "axios";

import { CustomPagination, Loading } from '../..';
import ItemList from './ItemList'

import useGet from '../../useGet';

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
    const { data, error, loading } = useGet( cards ? "praycard/" : "video/" );
    const numberOfItemsPerPage = 9;
    const [pageNumber, setPageNumber] = useState(1);
    const [pageCount] = useState(
        Math.ceil(data.length / numberOfItemsPerPage)
    );
    const start = (pageNumber - 1) * numberOfItemsPerPage 
    const end = pageNumber * (numberOfItemsPerPage - 1)
    const handleChange = (event, value) => {
        setPageNumber(value);
    };

    const filter = (item) => {
        const doesItemExist = item.title.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1
        if (doesItemExist) {
            return item
        }
        return ''
    }
    const filterItemData = data.filter( filter ).length > 0 
                ?(data.filter(filter)
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
                    { loading 
                        ? <Loading /> 
                        : filterItemData.length > 0 
                            ? filterItemData
                            : <div>No data found</div>
                    } 
                </Grid>
            </Grid>
          
            <Divider />
            { pageCount !== 0 &&
            <Box component="span">
                <CustomPagination
                    page={pageNumber}
                    count={pageCount}
                    onChange={handleChange}
                />
            </Box>
            }
        </Grid>
    )
}


export default MediaList

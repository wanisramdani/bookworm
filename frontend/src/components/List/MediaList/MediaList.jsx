import React, { useState } from 'react'
import { Grid, Box, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { CustomPagination, Loading } from '../..';
import ItemList from './ItemList'

import { useGetData } from '../../useGet';
import { NoData } from '../../index';

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
    noData: {
        justifyContent: 'center',
    }
}) );

const MediaList = ({ cards, searchItem }) => {
    const classes = useStyles();
    const { data, error, loading } = useGetData( cards ? "praycard/" : "video/" );
    const numberOfItemsPerPage = 9;
    const [pageNumber, setPageNumber] = useState(1);
    const [pageCount] = useState(data !== null 
       ? Math.ceil(data.length / numberOfItemsPerPage)
       : 0
    );
    const start = (pageNumber - 1) * numberOfItemsPerPage 
    const end = pageNumber * (numberOfItemsPerPage - 1)
    const handleChange = (event, value) => {
        setPageNumber(value);
    };
    // TODO: redo filter logic    
    const filter = (item) => {
        const doesItemExist = item.title.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1 ||  item.author.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1
        const doesSerieExist = item.series.map( (e) => (e.title.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1) )
        const doesKlassExist = item.klass.map( (e) => (e.title.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1) )
        let series = false
        let klass = false
        for (let i = 0; i < doesSerieExist.length; i++) {
            console.log(doesSerieExist[i])
            if ( doesSerieExist[i] ){                     
                return  series = true
            }
        } 
        for (let i = 0; i < doesKlassExist.length; i++) {
            if ( doesKlassExist[i] ){                           
                return klass = true
            }
        } 

        if (doesItemExist || series || klass) {
            return item
        }
        return ''
    }

    const filterItemData = data !== null && data.filter( filter ).length > 0 
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
                <Grid container spacing={2} justifyContent='center'>
                    { loading 
                        ? <Loading /> 
                        : filterItemData.length > 0 
                            ? filterItemData
                            : <NoData />
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

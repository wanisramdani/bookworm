import React from 'react'

import { makeStyles } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'

const useStyles = makeStyles ( theme => ({
    root:{
        '& .Mui-selected':{
            background: '#e09c1c',
            color: 'white',
            '&:hover':{
                background: '#f7b338',
            },
        },
        '& .MuiPagination-ul':{
            flexWrap: 'nowrap',
            '& li': {
                '&: first-child': {
                    '& > button::after': {
                        content: "previous",
                    }
                },
            },
        },
        
        display: 'inline-flex',
        padding: '25px',
       
    },
    pagination: {
        display: 'inline-flex',
        padding: '25px',
    },

    selected: {
        background: '#e09c1c',
        color: 'white',
        '&:hover':{
            background: '#f7b338',
        },
    },
}) );


const CustomPagination = ({ page, count, onChange }) => {
    const classes = useStyles();
    const isFirstPage = page === 1 ? true : false
    console.log(page === 1)
    return (
        <Pagination
            className={classes.root}
            count={count}
            page={page}
            onChange={onChange}
            showLastButton={true}
            showFirstButton={!isFirstPage}
            hidePrevButton={isFirstPage}
            variant="outlined" 
            shape="rounded" 
        />    
    )
}


export default CustomPagination

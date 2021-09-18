import React from 'react'

import { makeStyles } from '@material-ui/core'
import { useGridSlotComponentProps } from '@material-ui/data-grid';
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


const CustomPagination = () => {
    const { state, apiRef } = useGridSlotComponentProps()
    const classes = useStyles();
    const isFirstPage = state.pagination.page === 1 ? false : true
    
    return (
        <Pagination
            className={classes.root}
            count={state.pagination.pageCount}
            page={state.pagination.page + 1}
            onChange={(event, page) => 
                apiRef.current.setPage(page - 1)
            }
            showLastButton={true}
            showFirstButton={!isFirstPage}
            hidePrevButton={isFirstPage}

            variant="outlined" 
            shape="rounded" 
        />    
    )
}


export default CustomPagination

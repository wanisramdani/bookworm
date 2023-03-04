import React from 'react'

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles( (theme) => ({
    bookContainer: {
        [theme.breakpoints.up('md')]:{
            justifySelf: 'center',
            marginBottom: '50px',
            margin: "0",
        },
        [theme.breakpoints.down('md')]:{
           
            margin: "0",
        },
    },
    bookCoverContainer: {
        textAlign: 'center',
        marginBottom: '10px',
        [theme.breakpoints.down('md')]:{
            textAlign: 'right',
            marginRight: '80px',
        },

    },
    bookCover: {
        border: '1px solid #c1bbbb',
        filter: 'drop-shadow(-1px 4px 4px #4e4e4e)',
        [theme.breakpoints.down('md')]:{
            width: '300px',
            height: '380px',
        },
    },
}) )

const Fatawi = ({ content }) => {
    const classes = useStyles()

    return (
        <div className={classes.bookContainer}>
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <div className={classes.bookCoverContainer}> 
            </div>
        </div>
    )
}

export default Fatawi

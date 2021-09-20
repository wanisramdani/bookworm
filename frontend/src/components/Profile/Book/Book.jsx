import React from 'react'

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles( (theme) => ({
    bookContainer: {
        justifySelf: 'center',
        marginBottom: '50px',
    },
    bookCoverContainer: {
        textAlign: 'center',
        marginBottom: '10px',
        

    },
    bookCover: {
        border: '1px solid #c1bbbb',
        filter: 'drop-shadow(-1px 4px 4px #4e4e4e)',
    },

}) )
const Book = () => {
    const classes = useStyles()

    return (
        <div className={classes.bookContainer}>
            <div className={classes.bookCoverContainer}>
                <img
                    className={classes.bookCover}
                    width='900'
                    height='1080'
                    alt=''
                    src='https://placeimg.com/380/200/nature'
                />
            </div>
            <iframe 
                className={classes.iframe}
                loading='lazy'
                width='900' 
                height='800' 
                title='bruh'
                src='https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf'>
            </iframe>
        </div>
    )
}

export default Book

import React from 'react'

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    cardContainer:{
        textAlign: 'center',
        margin: '50px',
        marginBottom: '10px',
        [theme.breakpoints.down('md')]:{
            textAlign: 'right',
            marginRight: '80px',
        },
    },
    card: {
        border: '1px solid #c1bbbb',
        filter: 'drop-shadow(-1px 4px 4px #4e4e4e)',
        [theme.breakpoints.down('md')]:{
            width: '300px',
            height: '380px',
        },
    },

}) ) 

const Card = () => {
    const classes = useStyles()
    return (
        <div className={classes.cardContainer}>
            <img
                className={classes.card}
                width='1100'
                height='1080'
                alt=''
                src='https://placeimg.com/380/200/nature'
            />
        </div>
    )
}

export default Card

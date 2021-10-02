import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    container: {
        justifyContent: 'center',
        alignContent: 'center',
    },
}))

const NoData = () => {
    const classes =useStyles()
    return (
        <Box className={classes.container}>
            No Data Found
        </Box>
    )
}

export default NoData

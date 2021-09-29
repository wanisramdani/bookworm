import React from 'react'
import { Box, CircularProgress } from '@material-ui/core'

const Loading = () => {

    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignContent: 'center',
        }}>
            <CircularProgress />
        </Box>
    )
}

export default Loading

import React, {Suspense} from 'react'

import { Container, Box, CssBaseline } from '@material-ui/core';
import { Navbar, Main} from '../index'
import useStyles from './Styles';

const Layout = ( {children} ) => {
    const classes = useStyles();
    return (      
        <Container>
            <CssBaseline />
            <Box className={classes.content}>

                <Box className={classes.header}>
                    <Box className={classes.nav}>
                        <Navbar />
                    </Box>
                </Box>

                <Box className={classes.main}>
                    <Main />
                </Box>
                
                <Box className={classes.section}>
                    {children}
                </Box>

                <Box className={classes.footer}></Box>
            </Box>
        </Container>
    )
}

export default Layout
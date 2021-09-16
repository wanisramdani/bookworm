import React, {Suspense} from 'react'

import { Container, Box } from '@material-ui/core';
import { Navbar, Main} from '../index'
import useStyles from './Styles';

const Layout = ( {children} ) => {
    const classes = useStyles();
    return (      
        <Container>
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
                    <Suspense fallback={<div>Loading...</div>}>
                        
                        {children}

                    </Suspense>
                </Box>

                <Box className={classes.footer}></Box>
            </Box>
        </Container>
    )
}

export default Layout
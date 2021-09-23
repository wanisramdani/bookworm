import React, {Suspense} from 'react'

import { Container, Box, CssBaseline, Divider } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';

import { Navbar, Main} from '../index'
import useStyles from './Styles';

import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';


const Layout = ( {children} ) => {
    const classes = useStyles();
    return (      
        <Container>
            <CssBaseline />
            <Box className={classes.content}>

                <Box className={classes.header}>
                    <Box className={classes.contactDetails}>
                        <WhatsAppIcon className={classes.WhatsAppIcon} /><div className={classes.watchsapp}>+90 531 764 39 23 </div>
                        <EmailIcon className={classes.EmailIcon} /> <div className={classes.email}>safhatalssahihin@info.com </div>  
                    </Box>
                    <Box className={classes.nav}>
                        <Navbar />
                    </Box>
                </Box>

                <Box className={classes.main}>
                    <Main />
                </Box>
                
                <Box className={classes.section}>
                    <Suspense fallback={<CircularProgress />}>
                        {children}
                    </Suspense>
                </Box>

                <Box className={classes.footer}>
                    <Box className={classes.footerLogo}>Logo</Box>
                    <Box className={classes.fullName}>Full name</Box>
                    <Box className={classes.followUs}>Follow us on:</Box>
                    <Box className={classes.sns}>
                        <div className={classes.snsIcons}>
                            <FacebookIcon /> 
                            <InstagramIcon /> 
                            <TelegramIcon /> 
                            <TwitterIcon /> 
                            <YouTubeIcon />
                        </div>
                        <div className={classes.snsTag}>
                            safhatalssahihin
                        </div>
                    </Box>
                    <Box className={classes.copyRight}>
                        <Divider classes={{ root: classes.Divider }} variant='fullWidth' />
                        All rights are reserved
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Layout
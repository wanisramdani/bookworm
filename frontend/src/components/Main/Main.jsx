import React from 'react'

import { Todaydate } from '..'
import useStyles from './Styles';

import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Main = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.siteName}>
                <img 
                    height="100%"
                    width="100%"
                    src="https://scontent.fczl1-2.fna.fbcdn.net/v/t1.6435-9/s960x960/126247690_1271244963245024_5435131705917275823_n.png?_nc_cat=111&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeFdnLlkKbBTt_1VMbmvf5GvLFgCFl_q0mMsWAIWX-rSY-At5l4y59Qc8oezC7-IYkz69WCw0dF3o-cCNHxN3eTw&_nc_ohc=tegWhQT8sogAX8IO6zS&_nc_ht=scontent.fczl1-2.fna&oh=962c455a687c031e540d357af5b2313f&oe=616FF6E3"
                    alt=" صفحة الصحيحين البخاري و مسلم"
                />
                 
            </div>
            
            <div className={classes.sns}>
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
            </div>
            <Todaydate />
        </>
    )
}

export default Main

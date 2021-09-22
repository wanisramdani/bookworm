import React, { lazy } from 'react'

import { CssBaseline, useMediaQuery, Typography, Button, Card, CardMedia, CardContent } from '@material-ui/core';
import { ChevronRight, ChevronLeft } from '@material-ui/icons'

import Slider from 'react-slick';
import useStyles from './Styles';
const YoutubeEmbed = lazy( () => import('../Utils/YoutubeEmbed') )

function MuiNextArrow(props) {
    const { className, style, onClick } = props;
    return (
            <ChevronLeft 
                className={className}
                style={{ 
                    ...style, 
                    display: "block", 
                    color: 'black',
                }}
                onClick={onClick}
            />
    );
}


function MuiPrevArrow(props) {
    const { className, style, onClick } = props;
    return (

        <ChevronRight 
            className={className}
            style={{ 
                ...style, 
                display: "block", 
                color: 'black',
            }}
            onClick={onClick}
        />

    );
}

const prayCardsContent = (classes) => Array.from(new Array(9)).map( (_, i) => 
                    <Card elevation={0} 
                        classes={{
                            root:classes.imgCard
                        }}
                    > 
                        <CardMedia
                            className={classes.img}
                            component='img'
                            height='120'
                            width='100'
                            alt='test'
                            src='https://picsum.photos/200'
                            onDragStart={event => event.preventDefault()}
                        />
                        <CardContent
                            classes={{root:classes.cardContent}}
                        >
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                        </CardContent>
                    </Card>
                )

const videoContent = (classes) => Array.from(new Array(10)).map((_, i) =>
    <Card elevation={0} 
        classes={{
            root:classes.videoCard
        }}> 
        <YoutubeEmbed 
            key={i}
            light={true}
            src="https://youtu.be/c_8cplBi_gE" 
            title="Youtube Title"
            width="100%"
            height="120px"
        />
        <CardContent
            classes={{root:classes.cardContent}}
        >
            <Typography gutterBottom variant="h5" component="div">
                Lizard
            </Typography>
        </CardContent>
    </Card>
)

const CardsSlider = ( {videoDisplay, prayCardDisplay} ) => {
    const classes = useStyles()
    const isMobile = useMediaQuery( (theme) => theme.breakpoints.down('xs') )
    const sliderSettings = {
        dots: false,
        autoplay: true,
        draggable: true,
        infinite: true,
        lazyLoad: 'progressive',
        speed: 500,
        slidesToShow: isMobile ? 1 : 4,
        slidesToScroll: 3,
        nextArrow: <MuiNextArrow />,
        prevArrow: <MuiPrevArrow />
    }

    return(
        <div className={classes.cardContainter}>
            <Slider {...sliderSettings}>
                { prayCardDisplay ? prayCardsContent(classes) : "" }
                { videoDisplay ? videoContent(classes) : "" }
            </Slider>
        </div>
    )
};

const Bookshelf = () => {
    const classes = useStyles();
    return (
        <div className={classes.bookshelf}>
            {Array.from(new Array(9)).map( (_, i) =>
                <div key={i}>
                    <Button className={classes.bookbtn}>
                        Submit
                    </Button>
                </div>
            )}
        </div>
    )
};


const Section = ( {title} ) => {
    const classes = useStyles()
    
    return (
        <>
            <CssBaseline />
            <div className={classes.section}>
                <div className={classes.sectionBar}>
                    <div className={classes.sectionTitle}>
                        {title}
                    </div>
                    <div className={classes.yellowBar}></div>
                </div>
                
                <div className={classes.sectionContent}>
                        {title === "البطاقات الدعوية" 
                        ? <CardsSlider prayCardDisplay={true} videoDisplay={false} /> 
                        : title === "كتب السنة" 
                            ? <Bookshelf />
                            : title === "قسم المرئيات" 
                                ? <CardsSlider videoDisplay={true} prayCardDisplay={false} />
                                : ""
                        }
                </div>
            </div>
        </>
    )
}

export default Section

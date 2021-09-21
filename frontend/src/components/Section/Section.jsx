import React, { lazy, Suspense } from 'react'

import { Button } from '@material-ui/core';
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

const CardsSlider = () => {

    const classes = useStyles()
    const sliderSettings = {
        dots: false,
        autoplay: true,
        draggable: true,
        infinite: true,
        lazyLoad: 'progressive',
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        nextArrow: <MuiNextArrow />,
        prevArrow: <MuiPrevArrow />
    }
    return(
        <div className={classes.cardContainter}>
            <Slider {...sliderSettings}>
                {Array.from(new Array(9)).map( (_, i) => 
                    
                        <img
                            className={classes.img}
                            height='100'
                            width='120'
                            alt='test'
                            src='https://picsum.photos/200'
                        /> 
                    
                )}
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

const VideoDisplay = () => {
    const sliderSettings = {
        dots: false,
        autoplay: true,
        draggable: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        nextArrow: <MuiNextArrow />,
        prevArrow: <MuiPrevArrow />
    }

    return(
        <Slider {...sliderSettings}>
            {Array.from(new Array(10)).map((_, i) =>
                <YoutubeEmbed 
                    key={i}
                    src="https://youtu.be/c_8cplBi_gE" 
                    title="Youtube Title"
                    width="150"
                    height="100"
                />
            )}  
        </Slider>
    )
};



const Section = ( {title} ) => {

    const classes = useStyles()

    return (
        <>
            <div className={classes.section}>
                <div className={classes.sectionBar}>
                    <div className={classes.sectionTitle}>
                        {title}
                    </div>
                    <div className={classes.yellowBar}></div>
                </div>
                
                <div className={classes.sectionContent}>
                        {title === "البطاقات الدعوية" 
                        ? <CardsSlider /> 
                        : title === "كتب السنة" 
                            ? <Bookshelf />
                            : title === "قسم المرئيات" 
                                ? <VideoDisplay />
                                : ""
                        }
                </div>
            </div>
        </>
    )
}

export default Section

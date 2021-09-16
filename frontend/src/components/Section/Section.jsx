import React, { lazy, Suspense } from 'react'
import { useState } from 'react';

import ItemsCarousel from 'react-items-carousel'
import { Button } from '@material-ui/core';

import useStyles from './Styles';

const YoutubeEmbed = lazy(() => import('../Utils/YoutubeEmbed') )


const CardsSlider = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 60;
    const classes = useStyles()

    return(
        <div className={classes.cardContainter}>

            <ItemsCarousel
                alwaysShowChevrons={true}
                placeholderItem={<div style={{ height: 100, background: "red" }} />}
                enablePlaceholder={true}
                numberOfPlaceholderItems={5}
                numberOfCards={5}
                gutter={12}
                outsideChevron={true}
                activeItemIndex={activeItemIndex}
                requestToChangeActive={setActiveItemIndex}
                rightChevron={"<"} 
                leftChevron={">"}
                chevronWidth={chevronWidth}
            >

                {Array.from(new Array(10)).map((_, i) =>
                    <div
                    key={i}
                    style={{
                        height: 100,
                        background: 'url(https://placeimg.com/380/200/nature)'
                    }}
                    />
                )}  
            </ItemsCarousel>
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
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 60;

    return(
        <ItemsCarousel
            placeholderItem={<div style={{ height: 100, background: "#EEE" }} />}
            enablePlaceholder={true}
            numberOfPlaceholderItems={5}
            numberOfCards={4}
            gutter={25}
            slidesToScroll={1}
            outsideChevron={true}
            showSlither={false}
            firstAndLastGutter={false}
            activeItemIndex={activeItemIndex}
            requestToChangeActive={setActiveItemIndex}
            rightChevron={"<"} 
            leftChevron={">"}
            chevronWidth={chevronWidth}
        >

            {Array.from(new Array(10)).map((_, i) =>
                <YoutubeEmbed 
                    embedId="bE31y5HbukA" 
                    title="Youtube Title"
                    width="150"
                    height="100"
                />
            )}  
        </ItemsCarousel>
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
                
                <Suspense>
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
                </Suspense>
            </div>
        </>
    )
}

export default Section

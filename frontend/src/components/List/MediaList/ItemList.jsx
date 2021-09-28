import React, { lazy } from 'react'
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Grid} from '@material-ui/core'

const YoutubeEmbed = lazy( () => import('../../Utils/YoutubeEmbed') )

const ItemList = ({item, classes, isCard}) => {
    
    return (
        <Grid item lg={3} sm={6} xs={12}>
            <Card
                onClick={ () => console.log("") }
            >   
                { isCard 
                    ? <CardMedia
                        component="img"
                        height="180"
                        image={`${item.picture}`}    
                        alt={`${item.title}`}
                     />
                    :
                    <YoutubeEmbed 
                    src={item.youtube_link}
                    title={item.title}
                    height="180px"
                    width="200"
                />
                }

                <CardContent classes={{ root:classes.cardContent }} >
                    <Typography variant="h5" component={Link} to="/">
                        { /* 
                            ** Incase of the title being long
                            ** we display 15 characters
                        */ }
                        {item.title.length > 15 
                            ? item.title.substring(0, 15) + '...' 
                            : item.title
                        } 
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default ItemList

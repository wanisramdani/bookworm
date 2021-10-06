import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { CssBaseline, AppBar, Toolbar, InputBase, Typography, useMediaQuery, SwipeableDrawer, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from './styles';

const WebAppBar = () => {
    const classes = useStyles();

    return (
    <div className={classes.navbarItems}>                            
        <div className={classes.items}>
            <Typography className={classes.title} component={Link} to="/fatawis" variant="h6">
                Fatawi
            </Typography>
            <Typography  className={classes.title} component={Link} to="/audios" variant="h6">
                Audio
            </Typography>
            <Typography  className={classes.title} component={Link} to="/videos" variant="h6">
                Video
            </Typography>
            <Typography className={classes.title}  component={Link} to="/books" variant="h6">
                Books
            </Typography>
            <Typography  className={classes.title} component={Link} to="/cards" variant="h6">
                Pray Cards
            </Typography>
            <Typography align="right" className={classes.title} component={Link} to="/" variant="h6">
                Home
            </Typography>
        </div>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
            placeholder="Search…"
            classes={{
                root: classes.inputRoot,
                input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
            />
        </div>

    </div>
    
)}

const MobileAppBar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <IconButton onClick={handleClick}>
                <MenuIcon />
            </IconButton>
            <SwipeableDrawer
                className={classes.drawer}
                anchor='left'
                open={open}
                onClose={handleClick}
                onOpen={handleClick}
            >  
                <div className={classes.itemsMobile}>
                    <Typography align="right" className={classes.title} component={Link} to="/" variant="h6">
                        Home
                    </Typography>
                    <Typography  className={classes.title} component={Link} to="/cards" variant="h6">
                        Pray Cards
                    </Typography>
                    <Typography className={classes.title}  component={Link} to="/books" variant="h6">
                        Books
                    </Typography>
                    <Typography  className={classes.title} component={Link} to="/audios" variant="h6">
                        Audio
                    </Typography>
                    <Typography  className={classes.title} component={Link} to="/videos" variant="h6">
                        Video
                    </Typography>
                    <Typography className={classes.title} component={Link} to="/fatawis" variant="h6">
                        Fatawi
                    </Typography>
                    
                </div>
            </SwipeableDrawer>
            
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput
                    }}
                    inputProps={{ "aria-label": "search" }}
                />
            </div>
        </>
    )
};

const Navbar = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery( (theme) => theme.breakpoints.down('sm') )
    
    return (
        <div className={classes.root}> 
            <CssBaseline />
            <AppBar className={classes.appBar} position="static">
               <Toolbar className={classes.toolBar}>
                    {isMobile 
                    ? <MobileAppBar /> 
                    : <WebAppBar/>}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;

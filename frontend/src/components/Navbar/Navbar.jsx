import React from 'react'
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, InputBase, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}> 
            <AppBar className={classes.appBar} position="static">
               <Toolbar className={classes.toolBar}>
                    <div className={classes.navbarItems}>                            
                        <div className={classes.items}>
                            <Typography className={classes.title} component={Link} to="/" variant="h6">
                                Fatawi
                            </Typography>
                            <Typography  className={classes.title} component={Link} to="/" variant="h6">
                                Audio&Video
                            </Typography>
                            <Typography className={classes.title}  component={Link} to="/" variant="h6">
                                Books
                            </Typography>
                            <Typography  className={classes.title} component={Link} to="/" variant="h6">
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
                    
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;

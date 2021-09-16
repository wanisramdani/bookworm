import React from 'react'
import { Input, FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core'

import { Breadcrumb } from '../index';
import useStyles from './Styles';

const List = () => {
    const classes = useStyles();
    return (
        <div className={classes.listContainer}>
          <Breadcrumb className={classes.breadcrumbSection} />
          <div className={classes.sideBar}>

          </div>
          <div className={classes.list}>
              <div className={classes.filterSpace}>
                  <div className={classes.search}>
                  <FormControl className={classes.formControl}>
                        <InputLabel shrink className={classes.labelFilter}>
                            القسم
                        </InputLabel>
                        <Select 
                            classes={{icon:classes.icon, iconOpen:classes.iconOpen,select:classes.selectSelect}}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                        </Select>
                    </FormControl>
                    
                    <FormControl className={classes.formControl}>
                        <InputLabel classes={{formControl:classes.formControlLabel}} id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            classes={{icon:classes.icon, iconOpen:classes.iconOpen,select:classes.selectSelect}}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                
                    <FormControl className={classes.formControl}>
                        <InputLabel shrink className={classes.labelFilter}>
                            السلسلة        
                        </InputLabel>
                        <Select className={classes.selectFilter} >
                            <MenuItem value={10}>Ten</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel className={classes.labelFilter}>Name</InputLabel>
                        <Input className={classes.selectFilter}  />
                    </FormControl>
                    <Button></Button>
                  </div>
              </div>
              <div className={classes.listContent}></div>
          </div>

        </div>
    )
}

export default List

import React from 'react'
import { Input, FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core'

import { Breadcrumb } from '../index';
import DataTable from './DataTable'
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
                            className={classes.selectFilter}
                            classes={{icon:classes.icon, iconOpen:classes.iconOpen,select:classes.selectSelect}}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                        </Select>
                    </FormControl>
                    {/* age */} 
                    <FormControl className={classes.formControl}>
                     <InputLabel shrink className={classes.labelFilter}>
                            القسم
                        </InputLabel>
                        <Select 
                            className={classes.selectFilter}
                            classes={{icon:classes.icon, iconOpen:classes.iconOpen,select:classes.selectSelect}}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                        </Select>
                    </FormControl>
                
                    <FormControl className={classes.formControl}>
                        <InputLabel shrink className={classes.labelFilter}>
                            القسم
                        </InputLabel>
                        <Select 
                            className={classes.selectFilter}
                            classes={{icon:classes.icon, iconOpen:classes.iconOpen,select:classes.selectSelect}}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                        </Select>
        
                    </FormControl>
                    <FormControl className={classes.searchForm}>
                        <InputLabel shrink className={classes.searchLabel}>
                            القسم
                        </InputLabel>
                        <Input className={classes.searchInput}  />
                    </FormControl>
                    <Button className={classes.filterBtn}>Submit</Button>
                  </div>
              </div>

              <div className={classes.listContent}>
                  <DataTable />
              </div>
          
          </div>

        </div>
    )
}

export default List

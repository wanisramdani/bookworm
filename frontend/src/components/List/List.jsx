import React from 'react'
import { Input, FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core'

import { Breadcrumb } from '../index';
import DataTable from './DataTable'
import MediaList from './MediaList';
import useStyles from './Styles';

const List = ({ books, cards, videos, audios, fatawi }) => {
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
                    {cards ? <MediaList cards={true} /> : ''}
                    {books ? <DataTable books={true} /> : ''}
                    {audios ? <DataTable audios={true} /> : ''}
                    {videos ? <MediaList videos={true} /> : ''}
                    {fatawi ? <DataTable fatawi={true} /> : ''}
              </div>
          
          </div>

        </div>
    )
}

export default List

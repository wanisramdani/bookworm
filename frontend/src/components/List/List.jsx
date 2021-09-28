import React, {useState} from 'react'
import { CssBaseline, Input, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'

import { Breadcrumb } from '../index';
import DataTable from './DataTable'
import MediaList from './MediaList/MediaList';
import useStyles from './Styles';

const List = ({ books, cards, videos, audios, fatawi }) => {
    const classes = useStyles();
    const [searchItem, setSearchItem] = useState("")

    return (
        <div className={classes.listContainer}>
        <CssBaseline />
          <Breadcrumb className={classes.breadcrumbSection} />
          <div className={classes.sideBar}>

          </div>
          <div className={classes.list}>
              <div className={classes.filterSpace}>
                  <div className={classes.search}>
                  <FormControl className={classes.formControl}>
                        <InputLabel shrink className={classes.labelFilter}>
                           1 القسم
                        </InputLabel>
                        <Select 
                            className={classes.selectFilter}
                            classes={{icon:classes.icon, iconOpen:classes.iconOpen,select:classes.selectSelect}}
                        >
                            <MenuItem value={''}>
                                All
                            </MenuItem>
                            {itemData.map(({id, title}) => (
                            <MenuItem key={id} value={title}>
                                {title}
                            </MenuItem>
                            ))
                            }
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
                            <MenuItem value={''}>
                                All
                            </MenuItem>
                            {itemData.map(({id, title}) => (
                            <MenuItem key={id} value={title}>
                                {title}
                            </MenuItem>
                            ))
                            }
                        </Select>
                    </FormControl>
                
                    <FormControl className={classes.formControl}>
                        <InputLabel shrink className={classes.labelFilter}>
                            القسم
                        </InputLabel>
                        <Select 
                            className={classes.selectFilter}
                            onChange={ (event) => { setSearchItem(event.target.value) } }
                            classes={{icon:classes.icon, iconOpen:classes.iconOpen,select:classes.selectSelect}}

                        >
                            <MenuItem value={''}>
                                All
                            </MenuItem>
                            {itemData.map(({id, title}) => (
                            <MenuItem key={id} value={title}>
                                {title}
                            </MenuItem>
                            ))
                            }
                        </Select>
        
                    </FormControl>
                    <FormControl className={classes.searchForm}>
                        <InputLabel shrink className={classes.searchLabel}>
                            القسم
                        </InputLabel>
                        <Input 
                            className={classes.searchInput} 
                            onChange={ (event) => { setSearchItem(event.target.value) } } 
                        />
                    </FormControl>
                  </div>
              </div>

              <div className={classes.listContent}>
                    {cards ? <MediaList cards={true} searchItem={searchItem} /> : ''}
                    {books ? <DataTable books={true} /> : ''}
                    {audios ? <DataTable audios={true} /> : ''}
                    {videos ? <MediaList videos={true} searchItem={searchItem} /> : ''}
                    {fatawi ? <DataTable fatawi={true} /> : ''}
              </div>
          
          </div>

        </div>
    )
}

export default List


const itemData = [
    {
      id : 1,
      img: 'https://picsum.photos/200',
      title: 'Breakfast',
      author: '@bkristastucchio',
    },
    {
      id : 2,
      img: 'https://picsum.photos/200',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      id : 3,
      img: 'https://picsum.photos/200',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      id : 4,
      img: 'https://picsum.photos/200',
      title: 'Coffee',
      author: '@nolanissac',
    },
    {
      id : 5,
      img: 'https://picsum.photos/200',
      title: 'Hats',
      author: '@hjrc33',
    },
    {
      id : 6,
      img: 'https://picsum.photos/200',
      title: 'Honey',
      author: '@arwinneil',
    },
    {
      id : 7,
        img: 'https://placeimg.com/380/200/nature',
        title: 'Sea star',
        author: '@peterlaster',
    },
    {
      id : 8,
        img: 'https://placeimg.com/380/200/nature',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },

    {
      id : 9,
      img: 'https://picsum.photos/200',
      title: 'Basketball',
      author: '@tjdragotta',
    },
    {
      id : 10,
      img: 'https://picsum.photos/200',
      title: 'Fern',
      author: '@katie_wasserman',
    },
    {
      id : 11,
      img: 'https://picsum.photos/200',
      title: 'Mushrooms',
      author: '@silverdalex',
    },

    {
      id : 12,
      img: 'https://placeimg.com/380/200/nature',
      title: 'Bike',
      author: '@southside_customs',
    },
  ];
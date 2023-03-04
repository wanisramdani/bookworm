import React, {useState} from 'react'
import { CssBaseline, Input, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'

import { Breadcrumb } from '../index';
import MediaList from './MediaList/MediaList';
import useStyles from './Styles';
import { useGetData, useGetKlass, useGetSeries } from '../useGet';

const FilterForm = ({ filterTitle, data, handleChange }) => {
  const classes = useStyles();
  
  return (
    <FormControl className={classes.formControl}>
      <InputLabel shrink className={classes.labelFilter}>
        {filterTitle}
      </InputLabel>

        <Select 
          defaultValue=""
          className={classes.selectFilter}
          classes={{icon:classes.icon, iconOpen:classes.iconOpen,select:classes.selectSelect}}
        >
          <option 
              defaultValue=""
              className={classes.defaultOptions}
              value=""
              onClick={ handleChange }
            >                           
            </option>
              {data.map(({id, title}) => (
                <option 
                  defaultValue=""
                  className={classes.options}
                  key={id} 
                  value={title || ''} 
                  onClick={ handleChange }
                >
                {title}
            </option>
          ))
          }
        </Select>
    </FormControl>
  )
}

const List = ({ books, cards, videos, audios, fatawis }) => {
    const [searchItem, setSearchItem] = useState("")
    const classes = useStyles();
    const { klassData, klassError, klassLoading } = useGetKlass('klass/')
    const { seriesData, seriesError, seriesLoading } = useGetSeries('series/')
    const { data, error, loading } = useGetData('video/')
    const handleChange = (event) => {
      setSearchItem(event.target.value)
    };

    return (
        <div className={classes.listContainer}>
        <CssBaseline />
          <Breadcrumb className={classes.breadcrumbSection} />
          <div className={classes.sideBar}>

          </div>
          <div className={classes.list}>
              <div className={classes.filterSpace}>
                  <div className={classes.search}>
                    {/* Klass */}
                    <FilterForm filterTitle={' Klass'} data={klassData} handleChange={handleChange}/>
                 
                    {/* Author */} 
                    <FormControl className={classes.formControl}>
                      <InputLabel shrink className={classes.labelFilter}>
                        {'Author'}
                      </InputLabel>
                      <Select 
                          defaultValue=""
                          value=""
                          className={classes.selectFilter}
                          classes={{icon:classes.icon, iconOpen:classes.iconOpen,select:classes.selectSelect}}
                      >
                          <option 
                              defaultValue=""
                              className={classes.defaultOptions}
                              value=""
                              onClick={ handleChange }
                            >                           
                            </option>
                              {data.map(({id, title, author}) => (
                                <option 
                                  defaultValue=""
                                  className={classes.options}
                                  key={id} 
                                  value={author || ''} 
                                  onClick={ handleChange }
                                >
                                {author}
                            </option>
                          ))
                          }
                      </Select>
                    </FormControl>

                    {/* Series */} 
                    <FilterForm filterTitle={' Series'} data={seriesData} handleChange={handleChange}/>

                    {/* Input Search */}
                    <FormControl className={classes.searchForm}>
                        <InputLabel shrink className={classes.searchLabel}>
                            Search
                        </InputLabel>
                        <Input 
                            className={classes.searchInput} 
                            onChange={ handleChange } 
                        />
                    </FormControl>
                  </div>
              </div>

              <div className={classes.listContent}>
                    {cards ? <MediaList cards={true} searchItem={searchItem} /> : ''}
                    {books ? <MediaList books={true} searchItem={searchItem} /> : ''}
                    {audios ? <MediaList audios={true} searchItem={searchItem} /> : ''}
                    {videos ? <MediaList videos={true} searchItem={searchItem} /> : ''}
                    {fatawis ? <MediaList fatawi={true} searchItem={searchItem} /> : ''}
              </div>
          
          </div>

        </div>
    )
}

export default List
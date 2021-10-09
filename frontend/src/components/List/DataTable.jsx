import React from 'react'
import { Link } from 'react-router-dom';

import { DataGrid } from '@material-ui/data-grid'

import { makeStyles, Typography } from '@material-ui/core';
import { useGridSlotComponentProps } from '@material-ui/data-grid';

import CustomPagination from '../Utils/CustomPagination';
import { useGetData } from '../useGet';

const useStyles = makeStyles( theme => ({ 
  footerContainer: {
    justifyContent: 'center',
    background: 'red',
  },
  columnHeader: {
    background: 'red',
  },
  title: {
    textDecoration: 'none',
    color: 'black',
  }

}) );


const DataTablePagination = () => {
  const { state, apiRef } = useGridSlotComponentProps()
  const page = state.pagination.page;
  const pageCount = state.pagination.pageCount;
  const handleChange = (event, page) => apiRef.current.setPage(page - 1)
  return (
    <CustomPagination 
      page={page + 1}
      count={pageCount}
      onChange={handleChange}
    />
  )
}
const fetchPath = (books, audios, fatawi) => {
  if (books) {
    return 'book/'
  }
  if (audios){
    return 'audio/'
  }
  if (fatawi){
    return 'fatawi/'
  }
}

const DataTable = ({ books, audios, fatawi, searchItem }) => {
    const classes = useStyles();
    const fetchedPath = fetchPath(books, audios, fatawi)
    const { data, error, loading } = useGetData(fetchedPath)   
    const rows = []
    const columns = [
      {
        field: 'title',
        headerName: 'Title',
        width: 300,
        editable: true,
        renderCell: (params) => (
            <Typography className={classes.title} component={Link} to={fetchedPath + params.id}  variant="h6">
                  {params.value}
            </Typography>
  
        ),
      },
      {
        field: 'author',
        headerName: 'Author',
        width: 200,
        editable: false,
        renderCell: (params) => (
          <Typography className={classes.title}  variant="h6">
                {params.value}
          </Typography>
        ),
      },   
      {
        field: 'klass',
        headerName: 'Klass',
        width: 350,
        editable: false,
        renderCell: (params) => (
          <div>
            {params.value.map((e) => ( 
              <Typography className={classes.title} component={Link} to={'klass/' + e.id}  variant="h6">
                { e.title + ' ' }
                </Typography>
            ))
            }
          </div>        
        ),
      },
      {
        field: 'created_on',
        headerName: 'Create date',
        width: 150,
        editable: false,
        renderCell: (params) => (
          <Typography className={classes.title}  variant="h6">
                {params.value}
          </Typography>
        ),
      },
  ];

  data.map( (item) => (
    rows.push(
      {
        'id' : item.id,
        'title' : item.title, 
        'author' : item.author, 
        'klass' : item.klass.map( (e) => ( e ) ), 
        'created_on' : item.created_on.split('T')[0] 
      }
      )    
    )
  )

  return (
      <div >
          <DataGrid 
              autoHeight={true}               
              rows={rows}
              columns={columns}
              pageSize={3}
              autoPageSize={true}
              disableSelectionOnClick
              paginationMode="client"
              pagination
              components= {{
                  Footer: DataTablePagination
              }}
              classes={{
                Footer:classes.footerContainer,
              }}

          />
      </div>
  )
}

export default DataTable

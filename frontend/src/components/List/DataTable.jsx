import React from 'react'
import { DataGrid } from '@material-ui/data-grid'

import { makeStyles } from '@material-ui/core';
import { useGridSlotComponentProps } from '@material-ui/data-grid';

import CustomPagination from '../Utils/CustomPagination';
const useStyles = makeStyles( theme => ({ 
  footerContainer: {
    justifyContent: 'center',
    background: 'red',
  },
  columnHeader: {
    background: 'red',
  },

}) );

const columns = [
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: false,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: false,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${
          params.getValue(params.id, 'lastName') || ''
        }`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

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

const DataTable = ({ books, audio, fatawi }) => {
    const classes = useStyles();
    return (
        <div >
            <DataGrid 
                autoHeight={true}
                disableColumnMenu
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

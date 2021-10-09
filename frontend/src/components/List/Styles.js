import { makeStyles } from "@material-ui/core";

export default makeStyles( (theme) => ({
    listContainer: {
        marginTop: '1px',
        background: '#fff4e5',
        border: '1px solid',
        borderRadius: '15px',
        padding: '10px',
        display: 'grid',
        gridTemplateRows: 'repeat(2, 1fr)',
        gridAutoRows: 'minmax(100%, auto)',
        height: '100%',
    },

    list: {
        gridColumn: '1/12',
        display: 'grid',
    },

    /* Filter section */
    filterSpace: {
        gridRow: '1/2',
        padding: '10px',
    },

    search: {
        border: '1px solid lighgray',
        borderRadius: '10px',
        backgroundColor: '#d8d4d4',
        maring: '10px',
    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },

    selectFilter: {
        background: 'white',
        width: '150px'
    },

    labelFilter: {
        color: 'black',
        left: 'auto',
    },

    icon:{
        position: 'relative',
    },

    iconOpen:{
        transform:'none'
    },
    formControlLabel:{
        left:24
    },
    selectSelect:{
        textAlign: 'right',
        paddingLeft:'24px',
    },

    searchForm: {
        padding: '8px',
    },

    searchInput: {
        background: 'white',
    },

    searchLabel:{
        color: 'black',
        left: 'auto',
        paddingTop: '11px',
    },

    filterBtn: {
        paddingTop: '10px',
        width: '2px',
        margin: '15px',
        background: '#e09c1c',
        "&:hover":{
            background: '#f7b338',
        },
    },

    listContent: {
        gridRow: '2/3',
    },

    options: {
        padding: '10px',
        '&:hover':{
            cursor: 'pointer',
            backgroundColor: 'rgba(0, 0, 0, 0.08)',
        }
    },

    defaultOptions: {
        padding: '17px',
        '&:hover':{
            cursor: 'pointer',
            backgroundColor: 'rgba(0, 0, 0, 0.08)',
        }
    },
}) );
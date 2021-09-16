import { makeStyles } from "@material-ui/core";

export default makeStyles( (theme) => ({
    listContainer: {
        padding: '10px',
        display: 'grid',
        gridTemplateRows: 'repeat(2, 1fr)',
        gridAutoRows: 'minmax(100%, auto)',
    },

    sideBar: {
        gridColumn: '1/4',
        backgroundColor: 'blue'
    },
    list: {
        gridColumn: '4/12',
        display: 'grid',
    },

    filterSpace: {
        gridRow: '1/2',
    },
    search: {
        border: '1px solid lighgray',
        borderRadius: '10px',
        backgroundColor: 'gray',

    },

    listContent: {
        gridRow: '2/3',
        backgroundColor: 'yellow'

    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        "&:InputLabel": {
            backgroundColor: 'white',
        },
    },

    labelFilter: {
        color: 'black',
        left: 'auto',
    },

    icon:{
        position: 'relative',
        background: 'white',
    },

    iconOpen:{
        backgroundColor: 'white',
        transform:'none'
    },
    formControlLabel:{
        left:24
    },
    selectSelect:{
        backgroundColor: 'white',
        paddingLeft:'24px',
    }

}) );
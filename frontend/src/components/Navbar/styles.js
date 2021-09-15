import { makeStyles } from '@material-ui/core/styles';

export default makeStyles( (theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        boxShadow: 'none',
        background: '#FFF4E5',
        color: 'black',
    },
    title: {
        textDecoration: 'none',
        textAlign: 'right',
        color: 'black',
        margin: '10px',
    },
    navbarItems: {
        display: 'inline-flex',
        marginLeft: 'auto',
    },

    search: {
        paddingRight: '100px',
    },

    searchIcon: {
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        justifyContent: 'center',
        padding: '5px 5px 10px 16px',
        /* align-items: center; */
        /* pointerEvents: 'none', */
      },
      
    inputRoot: {
        color: "inherit"
        },
        inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingRight: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
            width: "20ch"
            }
        }
    }

}) );

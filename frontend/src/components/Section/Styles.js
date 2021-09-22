import { makeStyles } from '@material-ui/core/styles';

export default makeStyles( (theme) => ({
    section: {
    },

    sectionBar: {
        gridRow: '1/2',
        background: 'linear-gradient(127deg, #51403f, #ac8985)',
        filter: 'drop-shadow(0px 3px 11px rgb(34, 33, 33))',
        height: '30px',
        textAlign: 'right',
        display: 'grid',
        gridTemplateRows: '25px 5px'
    },

    sectionTitle: {
        color: 'white',
        gridRow: '1/2',
        paddingRight: '10px',
    },
    yellowBar: {
        gridRow: '2/3',
        background: '#FEE75C',
    },

    sectionContent: {
        background: '#fff4e5',
        padding: '19px',
        gridRow: '2/4',
        backgroundRepeat: 'no-repeat',
    },

    /* Cards view */
    cardContainter: {
        border: '1px solid #c5c2c2',
        borderRadius: '25px',
        padding: '10px',
    },

    /* BOOKS view */
    bookshelf: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '10px',
        padding: '10px',
        overflow: 'overlay',
        [theme.breakpoints.down("xs")]: {
            gridTemplateColumns: 'repeat(1, 1fr)',
        },
    },

    bookbtn: {
        background: "#ac8985",
        color: 'white',
        border: '1px solid black',
        borderRadius: '15px',
        padding: '10px',
        textAlign: 'center',
        height: '30px',
        width: '120px',
        '&:hover': {
            background: '#80615d',
        }
    },
    imgCard:{
        background: "transparent"
    },

    img: {
        background: 'transparent',
        paddingLeft: '10px',
        paddingRight: '10px',

    },
    cardContent: {
        padding: '0',
        "&:last-child":{
            padding: "0",
        },  
    },

    /* Video View */
    videoCard: {
        background: "transparent",
        paddingLeft: '10px',
    },

}) );

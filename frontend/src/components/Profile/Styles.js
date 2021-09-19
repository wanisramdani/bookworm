import { makeStyles } from '@material-ui/core/styles';

export default makeStyles( (theme) => ({
    profileContainer: {
        marginTop: '1px',
        background: '#fff4e5',
        border: '1px solid',
        borderRadius: '15px',
        padding: '10px',
        display: 'grid',

    },

    profile: {
        display: 'grid',
        gridColumn: '1/12',
        textAlign: 'right',
    },

    audioCard: {
        display: 'grid',
        margin: '50px',
        marginBottom: '90px'
    },

    audioPlayer: {
        marginTop: '10px',
        paddingRight: '10px',
        gridColumn: '3/8',
    },

    audioDetails: {
        width: '516px',
        marginTop: "15px",
        gridColumn: "3/8",
        gridRow: '2/3',
    },

    cardContent:{

    },

    gridContent: {
        cursor: 'pointer',
        "&:hover": {
            background: '#fbeded',
        },
        "&:focus":{
            background: 'red',
        },
        margin: '6px',
        padding: '2px',
        background: '#ffff',
    },

    audioPicture: {
        gridRow: '1/3',
    },

}) );

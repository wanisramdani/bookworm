import { makeStyles } from '@material-ui/core/styles';

export default makeStyles( (theme) => ({
    profileContainer: {
        height: '100%',
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


}) );

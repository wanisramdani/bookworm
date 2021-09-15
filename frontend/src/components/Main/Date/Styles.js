import { makeStyles } from '@material-ui/core/styles';

export default makeStyles( (theme) => ({
    date: {
        background: '#fff4e5',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        paddingRight: '25',
        paddingTop: '10',
        fontWeight: 'bold',
        textAlign: 'right',
        gridRow: '3/4',
        height: '50px',
    },

    todayDate: {
        gridColumn: '1/2',

    },

    timezone: {
        borderRight: '4px solid rgb(201, 201, 201)',
        justifySelf: 'end',
        height: '32px',
        paddingRight: '10px',
        gridColumn: '2/3',
        gridRow: '1/2',
    },
}) );

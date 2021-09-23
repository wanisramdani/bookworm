import { makeStyles } from '@material-ui/core/styles';

export default makeStyles( (theme) => ({
    
    siteName: {
        textAlign: "center",
        height: '300px',
        
      },
    
    sns: {
        display: 'flex',
        direction: 'ltr',
        color: 'white',
        gridRow: "2/3",
        padding: '10px',
        alignSelf: 'center',
        [theme.breakpoints.down('md')]:{
            display: 'grid',
        },
    },

}) );

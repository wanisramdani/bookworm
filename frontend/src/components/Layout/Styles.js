import { makeStyles } from "@material-ui/core";
/* Layout */ 
export default makeStyles( (theme) => ({
    content: {
        display: 'grid',
        background: '#51403F',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridAutoRows: 'minmax(100px, auto)',
        maxWidth: '1280',
        maxHeight: '1080',
        margin: '0 auto',
        position: 'relative',
        [theme.breakpoints.up('xm')]: {
           background: 'red',
        },
      },
      
      header: {
        gridColumn: '1 / 13',
        gridTemplateRows: 'repeat(2, 1fr)',
        display: 'grid',
      },
    
      nav: {
        gridRow: '2/3',
      },
      
      main: {
        gridColumn: '1/13',
        gridRow: '2/4',
        display: 'grid',
        gridTemplateRows: 'repeat(3, minmax(30px, auto) )',
      },
    
      section: {
        gridColumn: '1/13',
        gridRow: '4/8',
      },
    
      footer: {
        gridColumn: '1/13',
        gridRow: '8/10',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        color: 'white',

      },
      footerLogo:{},
      fullName:{},
      sellOut:{},
      copyRight:{},


      contactDetails:{
        margin: '10px',
        direction: 'ltr',
        display:' inline-flex',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
          display: 'block',
        },
      },

      EmailIcon:{
        marginLeft: '50px',
        [theme.breakpoints.down('sm')]: {
          marginLeft: '0',
        },
      },
}) );
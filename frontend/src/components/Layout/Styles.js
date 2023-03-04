import { makeStyles } from "@material-ui/core";
/* Layout */ 
export default makeStyles( (theme) => ({
    content: {
        display: 'grid',
        background: '#51403F',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridAutoRows: 'minmax(100px, auto)',
        maxWidth: '1280',
        minHeight: '1428px',
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
      footerLogo:{
        gridRow: '1/3',
        gridColumn: '1/2',
      },
      fullName:{
        gridRow: '1/3',
        gridColumn: '2/3',
      },

      followUs:{
        gridRow: '1/2',
        gridColumn: '3/4',
      },
  
      sns:{
        gridRow: '2/3',
        gridColumn: '3/4',
      },
  
      copyRight:{
        gridRow: '3/4',
        gridColumn: '2/3',
      },

      Divider:{
        border: "1px solid #fff4e5",
      },

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
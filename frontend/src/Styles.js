import { makeStyles } from '@material-ui/core/styles';

export default makeStyles( (theme) => ({
    container: {
      maxWidth: '960px',
      margin: 'auto',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    content: {
      display: 'grid',
      background: '#51403F',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridAutoRows: 'minmax(100px, auto)',
      maxWidth: '960px',
      margin: '0 auto',
      position: 'relative',
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
    },
  }));
  
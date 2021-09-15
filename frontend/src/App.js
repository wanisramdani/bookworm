import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@material-ui/core';
import { Container, Box } from '@material-ui/core';
import { Navbar, Main} from './components'

import useStyles from './Styles';
/* https://github.com/adrianhajdin/project_e_commerce/blob/main/src/App.js */

const Section = lazy(() => import('./components/Section/Section'))

const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'Cairo',
  },
})

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Container>
              <Box className={classes.content}>

                  <Box className={classes.header}>
                    <Box className={classes.nav}>
                      <Navbar />
                    </Box>
                  </Box>

                  <Box className={classes.main}>
                    <Main />
                  </Box>
                  
                  <Box className={classes.section}>
                    <Suspense fallback={<div>Loading...</div>}>
                      <Section title="البطاقات الدعوية" />
                      <Section title="كتب السنة" />
                      <Section title="قسم المرئيات" />  
                    </Suspense>
                  </Box>

                  <Box className={classes.footer}>

                  </Box>
              </Box>
          </Container>
          </Route>


        </Switch>

      </Router>
    </ThemeProvider>
  );
}

export default App;

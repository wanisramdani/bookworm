import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@material-ui/core';
import { Layout, Section, List } from './components';

/* https://github.com/adrianhajdin/project_e_commerce/blob/main/src/App.js */

const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'Cairo',
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Layout>
            
            <Route exact path='/'>
              <Section title="البطاقات الدعوية" />
              <Section title="كتب السنة" />
              <Section title="قسم المرئيات" />  
            </Route>
            
            <Route path='/books'>
              <List />
            </Route>
          </Layout>
        </Switch>

      </Router>
    </ThemeProvider>
  );
}

export default App;

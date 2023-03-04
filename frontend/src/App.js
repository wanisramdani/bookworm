import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { createTheme, ThemeProvider, CssBaseline } from '@material-ui/core';
import { Layout, Section, List, Profile } from './components';

const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'Cairo',
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Layout>
            
            <Route exact path='/'>
              <Section title="البطاقات الدعوية" />
              <Section title="كتب السنة" />
              <Section title="قسم المرئيات" />  
            </Route>

            <Route path='/cards'>
              <List cards={true} />
            </Route>  
            
            <Route path='/books'>
              <List books={true} />
            </Route>
            
            <Route path='/videos'>
              <List videos={true} />
            </Route>
           
            <Route path='/audios'>
              <List audios={true} />
            </Route>
            
            <Route path='/fatawis'>
              <List fatawis={true} />
            </Route>

            <Route path='/video'>
               <Profile />
            </Route>

            <Route path='/audio'>
               <Profile />
            </Route>

            <Route path='/book'>
               <Profile />
            </Route>

            <Route path='/praycard'>
               <Profile />
            </Route>

            <Route path='/fatawi'>
               <Profile />
            </Route>

            <Route path='/profile'>
               <Profile />
            </Route>


          </Layout>
        </Switch>

      </Router>
    </ThemeProvider>
  );
}

export default App;

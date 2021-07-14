import React from 'react';
import Navigation from './components/Navigation'
import Header from './components/Header'
import Stack from './components/Stack'
import Home from './components/home'
import Contactme from './components/contact-me'
import Blog from './components/blog'
import blogChoice from './components/blogchooser';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>

        <Switch>
          <Route path ='/blog' exact component = {Blog}/>
          <Route path ='/' exact component = {Home}/>
          <Route path ='/stack' exact component = {Stack}/>
          <Route path = '/contact' exact component = {Contactme}/>
          <Route path='/blog/revision-techniques' exact component={blogChoice}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;

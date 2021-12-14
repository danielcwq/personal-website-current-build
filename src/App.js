import React, {useEffect} from 'react';
import Navigation from './components/Navigation'
import Header from './components/Header'
import Stack from './components/Stack'
import Home from './components/home'
import Contactme from './components/contact-me'
import Blog from './components/blog'
import blogChoice from './components/blogchooser';
import LivingDeep from './components/livingdeep';
import Resume from './components/resume';
import Perspectives from './components/perspectives';
import Running from './components/running';
import DeepLife from './components/deeplife';
import DeepWork from './components/deepwork';
import Portfolio from './components/portfolio'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ReactGa from 'react-ga';

function App() {
  useEffect(() => {
    ReactGa.initialize('UA-210213904-1');
    // To Report Page View 
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, [])

  useEffect(() => {
   console.log(window.location.pathname)
  })
  return (
    <Router>
      <div>

        <Switch>
          <Route path ='/blog' exact component = {Blog}/>
          <Route path ='/' exact component = {Home}/>
          <Route path ='/stack' exact component = {Stack}/>
          <Route path ='/resume' exact component = {Resume}/>
          <Route path = '/contact' exact component = {Contactme}/>
          <Route path='/blog/revision-techniques' exact component={blogChoice}/>
          <Route path = '/blog/living-the-deep-life' exact component = {LivingDeep}/>
          <Route path = '/blog/perspectives' exact component = {Perspectives}/>
          <Route path = '/running' exact component = {Running}/>
          <Route path = '/blog/the-deep-life' exact component = {DeepLife}/>
          <Route path = '/blog/deep-work' exact component = {DeepWork}/>
          <Route path = '/portfolio' exact component = {Portfolio}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;

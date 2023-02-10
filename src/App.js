import React, { useEffect } from 'react';
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
import Portfolio from './components/portfolio';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/about';
import RunningRevised from './components/runningRevised';
import NavigationHome from './components/NavigationHome';
import ReactGA from 'react-ga4';

function App() {
  useEffect(() => {
    ReactGA.initialize('G-Y53GCEEX9N');
    // To Report Page View 
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  useEffect(() => {
    console.log(window.location.pathname)
  })
  return (
    <Router>
      <div>

        <Switch>
          <Route path='/blog' exact component={Blog} />
          <Route path='/' exact component={Home} />
          <Route path='/stack' exact component={Stack} />
          <Route path='/resume' exact component={Resume} />
          <Route path='/contact' exact component={Contactme} />
          <Route path='/blog/revision-techniques' exact component={blogChoice} />
          <Route path='/blog/living-the-deep-life' exact component={LivingDeep} />
          <Route path='/blog/perspectives' exact component={Perspectives} />
          <Route path='/blog/the-deep-life' exact component={DeepLife} />
          <Route path='/blog/deep-work' exact component={DeepWork} />
          <Route path='/portfolio' exact component={Portfolio} />
          <Route path='/about' exact component={About} />
          <Route path='/running' exact component={RunningRevised} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;

import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Gallery from './pages/Gallery';
import Single from './pages/Single';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
    return (
        <div>
          <Router>
            <Header/>
              <Switch>
                <Route exact path='/' component ={Home} />
                <Route exact path='/about' component ={About} />
                <Route exact path='/service' component ={Service} />
                <Route exact path='/gallery' component ={Gallery} />
                <Route exact path='/single' component ={Single} />
                <Route exact path='/contact' component ={Contact} />
              </Switch>
            <Footer/>
          </Router>
        </div>
    );
  }

export default App;

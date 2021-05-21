import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import API from './components/API'
import NavBar from './components/NavBar';
import Rage from './components/Rage';
import Anxiety from './components/Anxiety';
import Energy from './components/Energy';
import Ethereal from './components/Ethereal';
import Pranayama from './components/Pranayama';
import './App.css';
import Header from './components/Header';



class App extends Component {

  render() {
    return (
    

      <Router>
      <div className="App">
        <Header />
        <NavBar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/anxiety" component={Anxiety} />
        <Route path="/energy" component={Energy} />
        <Route path="/ethereal" component={Ethereal} />
        <Route path="/pranayama" component={Pranayama} />
        <Route path="/rage" component={Rage} />
        </Switch>
        

      </div>
      </Router>


    );
  }
  
}
const Home = () => (
  <div>
    
  </div>
);
export default App;
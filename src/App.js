import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Search from './components/Search';
import Results from './components/Results';

class App extends Component {
  render() {
    return (
      <Router>
        <div class="table">
          <Route exact path="/" component={Search}/>
          <Route path="/results" component={Results}/>
        </div>
      </Router>
    );
  }
}

export default App;

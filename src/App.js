import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import EditForm from './pages/EditForm';
import ShowPage from './pages/ShowPage';
import NewForm from './pages/NewForm';
import Nav from './components/Nav'

import './App.css';


class App extends Component {
  render() {
    return(
      <div className="App">
        
        <Nav />

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/show/:id">
          <ShowPage />
        </Route>

        <Route path="/new">
          <NewForm />
        </Route>

        <Route path="/edit/:id">
          <EditForm />
        </Route>
        
      </div>
    )
  }
}
export default App;
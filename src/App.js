import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import EditForm from './pages/EditForm';
import ShowPage from './pages/ShowPage';
import NewForm from './pages/NewForm';
import Nav from './components/Nav'

import './App.css';


class App extends Component {

  constructor() {
    super()

    this.state = {
      bounties: []
    }
  }


  async componentDidMount() {
    const response = await fetch('http://localhost:3001/bounties');
    const data = await response.json();
    console.log(data.bounties);
    this.setState({ bounties: data.bounties })
  }


  render() {
    return(
      <div className="App">
        
        <Nav />

        <Route exact path="/">
          <Home bounties={this.state.bounties}/>
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
import React, { Component } from 'react';

import Home from './pages/Home';
import EditForm from './pages/EditForm';
import ShowPage from './pages/ShowPage';
import NewForm from './pages/NewForm';

import './App.css';


class App extends Component {
  render() {
    return(
      <div className="App">
        <Home />
        <EditForm />
        <ShowPage />
        <NewForm />
      </div>
    )
  }
}
export default App;
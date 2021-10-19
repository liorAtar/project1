import React, {Component} from 'react';
import Navbar from './component/layout/Navbar';
import Users from './component/users/Users';
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Navbar/>   
        <Users/>
      </div>
    );
  }
}

export default App;

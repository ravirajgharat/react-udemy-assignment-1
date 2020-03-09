import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    name: 'Peru'
  };

  inputChangedHandler = (event) => {
    this.setState({
      name: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React</h1>
        <h2>Udemy Assignment 1</h2>
        <hr />
        <UserInput 
          changed={this.inputChangedHandler} 
          currentName={this.state.name}
        />
        <UserOutput name={this.state.name} />
        <UserOutput name="Peru" />
        <UserOutput name={this.state.name} />
      </div>
    );
  }
}

export default App;

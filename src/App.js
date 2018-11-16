import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {
  state = {
    persons: [
      {name:'Patrick', age:23},
      {name:'Elena', age:24}
    ]
  }

  switchNameHandler = (newName) =>{
    this.setState({
      persons: [
      {name:newName, age:23},
      {name:'Elena', age:24}
    ]});
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
      {name:'Patrick', age:23},
      {name:event.target.value, age:24}
    ]});
  }

  render() {
    const style={
      backgroundColor:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, Im a react App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={()=>this.switchNameHandler('Maximilian')}
        >Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click = {this.switchNameHandler.bind(this,'Cancer')}
        >
          <p>Hi this is children</p>
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          change={this.nameChangeHandler}
        >
          <p>Hi this is children</p>
        </Person>
      </div>
    );
  }
}

export default App;

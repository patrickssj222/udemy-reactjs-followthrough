import React, { Component } from 'react';
import classes from './App.css';
import Person from "./Person/Person"
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary"
class App extends Component {
  state = {
    persons: [
      {id: 'awd', name:'Patrick', age:23},
      {id: 'awdafa', name:'Elena', age:24}
    ],
    showPerson:false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  render() {
    let person = null;
    let btnClass = '';

    if(this.state.showPerson){
      person = (
        <div>
          {this.state.persons.map((person, index)=>{
            return <ErrorBoundary><Person
              click = {()=>this.deletePersonHandler(index)}
              change = {(event)=>this.nameChangeHandler(event, person.id)}
              name={person.name}
              age={person.age}
              key={person.id}
            /></ErrorBoundary>
          })}
        </div>
      );

      btnClass=classes.Red;
    }

    let assignedClasses = ['bold'];
    if (this.state.persons.length <= 1){
      assignedClasses.push(classes.red);
    }

    assignedClasses = assignedClasses.join(' ');

    return (
      <div className={classes.App}>
        <h1>Hi, Im a react App</h1>
        <p className={assignedClasses}>This is really working!</p>
        <button
          className={btnClass}
          onClick={this.togglePersonHandler}
        >Toggle Person</button>
        {person}
      </div>
    );
  }
}

export default App;

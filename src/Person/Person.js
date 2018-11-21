import React, { Component } from 'react';
import classes from './Person.css'
const person = (props) =>{

  const rnd = Math.random();
  if ( rnd > 0.7 ){
    throw new Error('Something went wrong');
  }

  return (
    <div className={classes.Person}>
      <p onClick={props.click}>Im {props.name}, and I am {props.age}</p>
      {props.children}
      <input type="text" onChange = {props.change} value={props.name}/>
    </div>
  );
};
export default person;

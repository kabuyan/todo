import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class App extends Component {
  render(){
    return(
      <div>
          <Route path="/" component={TodoList} exact={true}/>
          <Route path="/todos/add" component={TodoForm}/>
      </div>
    )
  }
}

export default App;

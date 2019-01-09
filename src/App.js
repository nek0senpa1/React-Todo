import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const toDo = [
  {
  task: 'Make Shite Up',
  id: 6546584684684,
  completed: false
  },
  {
    task: 'Rando Stuff Up',
    id: 6546584684682,
    completed: false
    },
    {
      task: 'New Made Up Stuff',
      id: 6546584684682,
      completed: false
      }


]




class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    this.state = {
      todoList: toDo,
      task: '',
      id: '',
      completed: false,
      inputText: ''
    }
  }

  changes = event => {
    this.setState({ inputText: event.target.value });
  };



  render() {
    return (
      <div>
        <h2>Welcome to your ToDo BULLSHIT App!</h2>
        
        <TodoForm inputText={this.state.inputText} changes={this.changes}/>
        <TodoList todoList={this.state.todoList} task={this.state.task}/>


      </div>
    );
  }
}

export default App;

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';


function TodoList(props) {
    console.log(props);
    return (
        <div>
        
        {props.todoList.map(todo => {
            return <Todo changeComplete={props.changeComplete} key={todo.id} todo={todo}/>
        })}
        </div>
    )
} 

export default TodoList;

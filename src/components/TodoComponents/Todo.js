import React from 'react';
import "./Todo.css";

function Todo(props) {
    return (
        <div 
            // style={props.todo.completed ? {textDecoration:"line-through"} : null}
            className={props.todo.completed ? 'crossed' : null} 
            onClick={() => props.changeComplete(props.todo.id)}
            >
            {props.todo.task}
        </div>

    )
};

export default Todo;
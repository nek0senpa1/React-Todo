import React from 'react';

function TodoForm(props) {
    return (
        <form onSubmit={props.addToList}>


            <input
            type="text"
            name="inputText"
            placeholder="ThingstoAdd"
            className="TextClass"
            value={props.inputText} 
            
            onChange={props.changes}
            />
        <button type ="submit">Add Stuff</button>
        <button type ="clear">Clear Stuff</button>
        </form>
    );
}

export default TodoForm;
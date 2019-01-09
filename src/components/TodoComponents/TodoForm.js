import React from 'react';

function TodoForm(props) {
    return (
        <form>
            <input
            type="text"
            name="inputText"
            placeholder="ThingstoAdd"
            className="TextClass"
            value={props.inputText} 
            
            onChange={props.changes}
            />

        </form>
    );
}

export default TodoForm;
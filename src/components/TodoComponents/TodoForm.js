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
        <br></br>
        <button onClick={props.clearedStuff}>Items Done!</button>
        
        </form>
    );
}

export default TodoForm;
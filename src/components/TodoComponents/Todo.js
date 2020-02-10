import React from 'react';

function Todo(props) {
// console.log(props)

        return(
            <div>
                <h1>Your List</h1>
                <ul>
        <li>{props.notes.note}</li>
                </ul>
            </div>
        )
}

export default Todo;
// This component displays content on screen.

import React from 'react';

function Todo(props) {
    console.log(props)

        return(
            <div >
                <ul onClick={() => props.toggleNote(props.notes.id)}>
        <li>{props.notes.note}</li>
                </ul>
            </div>
        )
}

export default Todo;
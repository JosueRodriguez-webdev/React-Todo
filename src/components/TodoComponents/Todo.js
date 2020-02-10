// This component displays content on screen.

import React from 'react';

function Todo(props) {
    console.log(props)

        return(
            <div>
                <ul>
        <li>{props.notes}</li>
                </ul>
            </div>
        )
}

export default Todo;
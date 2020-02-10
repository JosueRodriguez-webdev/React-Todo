// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import { render } from 'react-dom';

function TodoList(props) {
    
        return(
            <div>
                <h1>Your List</h1>
                <ul>
        <li>{props.state.note}</li>
                </ul>
            </div>
        )
}

export default TodoList;
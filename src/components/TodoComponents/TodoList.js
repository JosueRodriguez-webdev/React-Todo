// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import Todo from './Todo'

function TodoList(props) {
console.log(props)

        return(
            <div>
                {props.state.map(notes => (
                    <Todo key={notes.id} notes={notes}/>
                ))}
            </div>
        )
}

export default TodoList;
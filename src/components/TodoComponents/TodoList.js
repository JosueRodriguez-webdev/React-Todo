// This component maps over data and send it to Todo.js to display.

import React from 'react';

import Todo from './Todo'

class TodoList extends React.Component {

    render() {
        return(
            <div>
                <h1>Todo List!</h1>
                {this.props.arrayList.map(notes => (
                <Todo notes={notes.note}/>
        ))}

            </div>
        )
}
}

export default TodoList;
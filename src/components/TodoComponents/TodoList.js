// This component maps over data and send it to Todo.js to display.

import React from 'react';

import Todo from './Todo'

class TodoList extends React.Component {

    render() {
        return(
            <div>
                <h1>Todo List!</h1>
                {this.props.arrayList.map(notes => (
                <Todo key={notes.id} notes={notes} toggleNote={this.props.toggleNote}/>
        ))}
            <button onClick={this.props.deleteNote}>Delete Note</button>
            </div>
        )
}
}

export default TodoList;
// Parent Componets to all Todos.
import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm.js'
import TodoList from './components/TodoComponents/TodoList.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      noteArray: []
    }
}

  addNewNote = note => {
    const newNote = {
        id: Date.now(),
        note: note,
        clearNote: false
    }
    this.setState({noteArray: [...this.state.noteArray, newNote]})
  }


  render() {
    return (
      <div>
        <TodoForm addNewNote={this.addNewNote}/>
        <TodoList arrayList={this.state.noteArray}/>
      </div>
    );
  }
}

export default App;

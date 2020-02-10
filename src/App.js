// Parent Componets to all Todos.
import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm.js'
import TodoList from './components/TodoComponents/TodoList.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        id: '',
        note: '',
        clearNote: false
    }
}

  addNewNote = note => {
    const newNote = {
        id: Date.now(),
        note: note,
        clearNote: false
    }
    this.setState({...this.state, newNote})
  }


  render() {
    return (
      <div>
        <TodoForm addNewNote={this.addNewNote}/>
        <TodoList/>
      </div>
    );
  }
}

export default App;

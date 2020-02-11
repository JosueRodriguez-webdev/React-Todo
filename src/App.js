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

  toggleNote = clickedId => {
    const updatedNotes = this.state.noteArray.map(item => {
      if(item.id === clickedId) {
        return {
          ...item,
          clearNote: !item.clearNote
        } }else {
          return item;
        }
    })

      this.setState({noteArray: updatedNotes})
  }

  deleteNote = () => {
    const updateNote = this.state.noteArray.filter(item => {
      return (item.clearNote)
    })
      console.log(updateNote)
      this.setState({noteArray: updateNote})
  }

  render() {
    return (
      <div>
        <TodoForm addNewNote={this.addNewNote}/>
        <TodoList arrayList={this.state.noteArray} toggleNote={this.toggleNote} deleteNote={this.deleteNote}/>
      </div>
    );
  }
}

export default App;

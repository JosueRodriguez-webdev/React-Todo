import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = [{
        id: '',
        note: '',
        clearNote: false
    }]
}

handleClearButton = () => {
  this.setState({clearNote: true})
  this.conditionOnClearNote();
}

conditionOnClearNote = (props)=> {
  if(this.state.clearNote === true) {
      return console.log(`clear the note is working`)
  }
}



handleNoteInput = event => {
  this.setState({note: event.target.value, id: Date.now()})
}

  render() {
    return (
      <div>
        <TodoForm setState={this.setState}/>
        <TodoList state={this.state}/>
      </div>
    );
  }
}

export default App;

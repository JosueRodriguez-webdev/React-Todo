// This component collects user input via forms

import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
            this.state = {
                note: ''
            }
    }

    // handle form change
     handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    // handle form submit
     handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNewNote(this.state.note);
        this.setState({note: ''})


    }

    
        render() {
        return(
            <div>
                <form>
                    <label htmlFor='note'>Notepad</label>
                <input placeholder='Type Note Here...' name='note' onChange={this.handleChange} value={this.state.note}/>
                <button onSubmit={this.handleSubmit}>Post Note</button>
                <button >Delete Note</button>
                </form>
            </div>
        )
}
}

export default TodoForm;
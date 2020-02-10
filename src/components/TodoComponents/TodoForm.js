import React from 'react';

function TodoForm(props) {
    // console.log(props)

        return(
            <div>
                <div>Notepad</div>
                <input placeholder='Type Note Here...' />
                <button onSubmit={props.handleNoteInput}>Post Note</button>
                <button onSubmit={props.handleClearButton}>Delete Note</button>
            </div>
        )
}

export default TodoForm;
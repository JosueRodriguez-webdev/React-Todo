import React from 'react';
import { render } from 'react-dom';

function TodoForm(props) {

        return(
            <div>
                <div>Notepad</div>
                <input placeholder='Type Note Here...' />
                <button >Submit</button>
                <button >Clear</button>
            </div>
        )
}

export default TodoForm;
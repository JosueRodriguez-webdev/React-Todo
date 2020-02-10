// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import { render } from 'react-dom';

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = [{
            id: '',
            note: '',
            clearNote: false
        }]
    }

    render() {
        return(
            <div>Hello World!</div>
        )
    }
}

export default TodoList;
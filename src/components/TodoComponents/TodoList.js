// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';


const TodoList = props =>{
    return (
        <div className="todo-list">           
            {props.jobs.map(job=>(
                <Todo
                key={job.id}
                job={job}
                toggleJob={props.toggleJob}/>
            ))}
            <button onClick={props.clearCompleted}>Clear Completed</button>                            
        </div>
    )
}

export default TodoList
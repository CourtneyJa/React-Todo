import React from 'react';


const Todo = props =>{
    
    return(
      <div className={`${props.job.completed ? 'job completed': ''}`} onClick={()=> props.toggleJob(props.job.id)}>
          {props.job.task}
      </div>
    )
}

export default Todo
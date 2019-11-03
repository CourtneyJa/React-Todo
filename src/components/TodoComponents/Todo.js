import React from "react";

const Todo = props => {
  let verboseClassName = "job";
  if (props.job.completed) {
    verboseClassName = verboseClassName + "completed";
  }
  return (
    <div
      className = {verboseClassName}
      onClick={() => props.toggleJob(props.job.id)}
    >
      <p>{props.job.task}</p>
    </div>
  );
};

export default Todo;

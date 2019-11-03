import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      taskName: ""
    };
  }
  handleChanges = e => {
    this.setState({
      taskName: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.taskName !== "") {
      this.props.addJob(this.state.taskName);
      this.setState({
        taskName: ""
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="task"
            value={this.state.taskName}
            onChange={this.handleChanges}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;

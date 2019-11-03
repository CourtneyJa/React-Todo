import React from 'react';


class TodoForm extends React.Component{
    constructor(){
        super();
        this.state={
            taskName:'',
        };
    }
    handleChanges = e=>{
        
        this.setState({
            taskName: e.target.value
        })
    }
    handleSubmit = e=>{
        e.preventDefault();
        this.props.addJob(this.state.taskName);
        this.setState({taskName: ''},console.log('mic check'));
                      
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        name='task'
                        value={this.state.taskName || ''}                        
                        onChange={this.handleChanges}/>
                    <button>Add Todo</button>
                </form>               
            </div>
        )
    }
}

export default TodoForm
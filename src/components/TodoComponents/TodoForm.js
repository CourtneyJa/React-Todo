import React from 'react';


class TodoForm extends React.Component{
    constructor(){
        super();
        this.state={
            job:''
        }
    }
    handleChanges = e=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e=>{
        e.preventDefault();
        this.props.addJob(this.state.addJob);
        this.setState({newJob: ''})
        console.log('mic check')               
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        value={this.job}
                        name='job'
                        onChange={this.handleChanges}/>
                    <button type='submit'>Add Todo</button>
                </form>               
            </div>
        )
    }
}

export default TodoForm
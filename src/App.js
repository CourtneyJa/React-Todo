import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


const starterList=[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state ={
      job: starterList     
    };
  }

  toggleJob = id =>{
    this.setState({
      job: this.state.job.map(job=>{
        if(job.id === id){
          return{
            ...job, completed: !job.completed
          };

        }else{
          return job;
        }
      })
    })
  }

  addJob = taskName =>{
    const newJob = {
      job: taskName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      job: [...this.state.job, newJob]
    });
    
  };

  clearCompleted = () =>{
    this.setState({
      job: this.state.job.filter(job => !job.completed)
    })
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList jobs={this.state.job} toggleJob={this.toggleJob} clearCompleted={this.clearCompleted}/>
        <TodoForm addJob={this.addJob} />
      </div>
    );
  }
}

export default App;

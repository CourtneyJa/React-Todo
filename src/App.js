import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';


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
      jobs: starterList     
    };
  }

  toggleJob = id =>{
    this.setState({
      jobs: this.state.jobs.map(job=>{
        if(job.id === id){
          return{
            ...job, completed: !job.completed
          };

        }
          return job;
        
      })
    })
  }

  addJob = ( taskName) =>{
    this.setState({
      jobs: [...this.state.jobs, {
        name: taskName,
        id: Date.now(),
        completed: false
      }]
    }, console.log("add item:", taskName));
    
  };

  clearCompleted = () =>{
    this.setState({
      jobs: this.state.jobs.filter(job => {return !job.completed;})
    });
  };

  // deleteTodo = ()=>{
  //   this.setState({
  //     job: this.state.job.filter(job =>!job.completed)
  //   })
  // }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
          <TodoList jobs={this.state.jobs} toggleJob={this.toggleJob} clearCompleted={this.clearCompleted} />
        </div>
        <div>
          <TodoForm addJob={this.addJob} />
        </div>
      </div>
    );
  }
}

export default App;

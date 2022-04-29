import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      inputTask: "",
      todos: [],
      doneTask: []
    }
  }

  addTask = () => {
    const { inputTask, todos: newTodos } = this.state;
    //add task into state
    newTodos.push(inputTask);
    //clear inputTask
    this.setState({ todos: newTodos, inputTask: "" })
  }

  onKeyUp = event => {
    const { value: inputTask } = event.target;
    // store value inside state;
    this.setState({inputTask})
  }

  render() {
    console.log("state", this.state)
      return (
    <div className="container">
      <h1>TODO LIST</h1>
      <div className='new-task'>
        <input onKeyUp={this.onKeyUp} id='addTask' placeholder='Add a task' />
        <button onClick={this.addTask} className='btn add'>Add</button>
      </div>
      <div className='content'> 
      <ul>
        {
          this.state.todos.map(todo => {
            return (
              <li> <input type="checkbox"/>{todo}<span className='delete'>X</span> </li>
            )
          })
        }
      </ul>
        <button className='clear btn'>Clear</button>
      </div>
    </div>
  );
  }

}

export default App;

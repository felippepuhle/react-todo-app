import React, { Component } from 'react';
import TaskAdd from './TaskAdd.js';
import TaskList from './TaskList.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    	title: 'Tasks App',
    	tasks: [] 
    };

    this.add = this.add.bind(this);
  }

  add(task) {
    this.setState({
      tasks: this.state.tasks.concat([task])
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <TaskAdd add={this.add}/>
        <TaskList tasks={this.state.tasks} />
      </div>
    )
  }
}

export default App;

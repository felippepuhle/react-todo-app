import React, { Component } from 'react';

class TaskList extends Component {
  render() {
	  var list = this.props.tasks.map(function(task, key) {
	  	return <li key={key}>{task}</li>;
	  });

		return (
	    <div>
	      <h2>List</h2>
	      <ul>{ list }</ul>
	    </div>
    )
	}
};

TaskList.defaultProps = {
  tasks: []
};

export default TaskList;
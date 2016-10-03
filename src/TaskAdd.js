import React, { Component } from 'react';

class TaskAdd extends Component {
	constructor(props) {
		super(props);

		this.state = {
			task: ''
		};

		this.onChangeTask = this.onChangeTask.bind(this);
		this.onSubmitForm = this.onSubmitForm.bind(this);
	}

	onChangeTask(e) {
		this.setState({
			task: e.target.value
		});
	}

	onSubmitForm(e) {
		e.preventDefault();

		if(this.state.task.length < 1) {
			return;
		}

		this.props.add(this.state.task);
		this.setState({
			task: ''
		});
	}

	render() {
		return (
			<form onSubmit={this.onSubmitForm}>
				<input type="text" value={this.state.task} onChange={this.onChangeTask} />
				<button type="submit">Add</button>
			</form>
		)
	}
};

TaskAdd.propTypes = {
	add: React.PropTypes.func.isRequired
};

export default TaskAdd;
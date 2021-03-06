import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCurrent, addNewTodo } from '../reducers/todo';

class TodoForm extends Component {
  handleInputChange = (evt) => {
    const val = evt.target.value;
    this.props.updateCurrent(val);
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.addNewTodo(this.props.currentTodo);
  };

  render() {
    const { currentTodo } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' value={currentTodo} onChange={this.handleInputChange} />
      </form>
    );
  }
}

export default connect((state) => ({ currentTodo: state.todo.currentTodo }), { updateCurrent, addNewTodo })(TodoForm);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, updateExistingTodo, deleteTodoById, getVisibleTodos } from '../reducers/todo';

const TodoItem = ({ id, isComplete, name, toggleTodo, deleteTodo }) => (
  <li>
    <span className='delete-item'>
      <button onClick={() => deleteTodo(id)}>X</button>
    </span>
    <input type='checkbox' checked={isComplete} onChange={() => toggleTodo({ id, name, isComplete: !isComplete })} />{' '}
    {name}
  </li>
);

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div className='Todo-List'>
        <ul>
          {this.props.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              toggleTodo={this.props.updateExistingTodo}
              deleteTodo={this.props.deleteTodoById}
              {...todo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default connect((state, ownProps) => ({ todos: getVisibleTodos(state.todo.todos, ownProps.filter) }), {
  fetchTodos,
  updateExistingTodo,
  deleteTodoById,
})(TodoList);

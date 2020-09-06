import { getTodos, createTodo, updateTodo, deleteTodo } from '../services/todoService';
import { showMessage } from './message';

const initState = {
  todos: [],
  currentTodo: '',
};

export const ADD_TODO = 'ADD_TODO';
const LOAD_TODOS = 'LOAD_TODOS';
const CURRENT_UPDATE = 'CURRENT_UPDATE';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const updateCurrent = (payload) => ({ type: CURRENT_UPDATE, payload });
export const loadTodos = (payload) => ({ type: LOAD_TODOS, payload });
export const addTodo = (payload) => ({ type: ADD_TODO, payload });
export const modifyTodo = (payload) => ({ type: UPDATE_TODO, payload });
export const removeTodo = (payload) => ({ type: DELETE_TODO, payload });

export const fetchTodos = () => {
  return (dispatch) => {
    getTodos().then((payload) => dispatch(loadTodos(payload)));
  };
};

export const addNewTodo = (name) => {
  return (dispatch) => {
    dispatch(showMessage('Saving Todo'));
    createTodo(name).then((payload) => dispatch(addTodo(payload)));
  };
};

export const updateExistingTodo = (todo) => {
  return (dispatch) => {
    dispatch(showMessage('Updating Todo'));
    updateTodo(todo).then((payload) => dispatch(modifyTodo(payload)));
  };
};

export const deleteTodoById = (id) => {
  return (dispatch) => {
    dispatch(showMessage('Updating Todo'));
    deleteTodo(id).then(() => dispatch(removeTodo(id)));
  };
};

export default (state = initState, action) => {
  switch (action.type) {
    case LOAD_TODOS:
      return { ...state, todos: action.payload };
    case ADD_TODO:
      return { ...state, currentTodo: '', todos: [...state.todos, action.payload] };
    case UPDATE_TODO:
      const index = state.todos.findIndex((t) => t.id === action.payload.id);
      state.todos[index] = action.payload;
      return { ...state, todos: [...state.todos] };
    case DELETE_TODO:
      return { ...state, todos: [...state.todos.filter((t) => t.id !== action.payload)] };
    case CURRENT_UPDATE:
      return { ...state, currentTodo: action.payload };
    default:
      return state;
  }
};

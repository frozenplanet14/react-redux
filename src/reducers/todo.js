import { getTodos, createTodo } from '../services/todoService';

const initState = {
  todos: [],
  currentTodo: '',
};

const ADD_TODO = 'ADD_TODO';
const LOAD_TODOS = 'LOAD_TODOS';
const CURRENT_UPDATE = 'CURRENT_UPDATE';

export const updateCurrent = (payload) => ({ type: CURRENT_UPDATE, payload });
export const loadTodos = (payload) => ({ type: LOAD_TODOS, payload });
export const addTodo = (payload) => ({ type: ADD_TODO, payload });

export const fetchTodos = () => {
  return (dispatch) => {
    getTodos().then((payload) => dispatch(loadTodos(payload)));
  };
};

export const addNewTodo = (name) => {
  return (dispatch) => {
    createTodo(name).then((payload) => dispatch(addTodo(payload)));
  };
};

export default (state = initState, action) => {
  switch (action.type) {
    case LOAD_TODOS:
      return { ...state, todos: action.payload };
    case ADD_TODO:
      return { ...state, currentTodo: '', todos: [...state.todos, action.payload] };
    case CURRENT_UPDATE:
      return { ...state, currentTodo: action.payload };
    default:
      return state;
  }
};

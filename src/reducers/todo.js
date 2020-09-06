const initState = {
  todos: [
    { id: 1, name: 'Render static UI', isComplete: true },
    { id: 2, name: 'Create initial state', isComplete: true },
    { id: 3, name: 'Render based on state', isComplete: false },
  ],
  currentTodo: '',
};

const ADD_TODO = 'ADD_TODO';
const CURRENT_UPDATE = 'CURRENT_UPDATE';

export const updateCurrent = (payload) => ({ type: CURRENT_UPDATE, payload });

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case CURRENT_UPDATE:
      return { ...state, currentTodo: action.payload };
    default:
      return state;
  }
};

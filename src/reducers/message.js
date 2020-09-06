import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from './todo';

const MESSAGE_SHOW = 'MESSAGE_SHOW';

export const showMessage = (payload) => ({ type: MESSAGE_SHOW, payload });

export default function (state = '', action) {
  switch (action.type) {
    case MESSAGE_SHOW:
      return action.payload;
    case ADD_TODO:
    case UPDATE_TODO:
    case DELETE_TODO:
      return '';
    default:
      return state;
  }
}

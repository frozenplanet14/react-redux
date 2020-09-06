import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';

// const todoChangeHandler = (payload) => store.dispatch(updateCurrent(payload));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// const render = () => {
//   const state = store.getState();

//   ReactDOM.render(
//     <React.StrictMode>
//       <App todos={state.todos} currentTodo={state.currentTodo} changeCurrent={actions.updateCurrent} />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// };

// render();

// store.subscribe(render);

/**
 * Sample code to dispatch action
 */
// setTimeout(() => {
//   store.dispatch({ type: 'ADD_TODO', payload: { id: 4, name: 'Added todo', isComplete: false } });
// }, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React with Redux</h2>
        </header>
        <div className='Todo-App'>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    );
  }
}

// export default App;
// const mapStateToProps = (state) => state;
// // const mapDispatchToProps = (dispatch) => bindActionCreators({ updateCurrent }, dispatch);
// const mapDispatchToProps = { updateCurrent };
// const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
// export default connectedApp;

// Simplify the above redux code

// export default connect((state) => state)(App);

export default App;

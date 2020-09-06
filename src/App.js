import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Message from './components/Message';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React with Redux</h2>
        </header>
        <Router>
          <div className='Todo-App'>
            <Message />
            <TodoForm />
            <Route path='/:filter?' render={({ match }) => <TodoList filter={match.params.filter} />} />
            <Footer />
          </div>
        </Router>
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

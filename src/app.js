import React, { Component } from 'react';
import './app.css';
import Todo from './components/todo/todo.component.js';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Todo/>
      </div>
    );
  }
}

export default App;

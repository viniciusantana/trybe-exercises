import './App.css';
import React, { Component } from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
};

const myTasks = ['Acordar', 'Escovar os dentes.', 'Tomar café']

class App extends Component {
  render() {
    return (
      <ul>
        {myTasks.map((task) => (Task(task)))}
      </ul>
    );
  }
};


/* function App() {
  return (
    <ul>
      {myTasks.map((task) => (Task(task)))}
    </ul>
  );
}; */

export default App;

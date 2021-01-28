import React, { useState,useEffect } from 'react';
import './App.css';

import Form from './components/Form';
import Todolist from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, SetFilteredTodos] = useState([]);
  //Functions
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        SetFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        SetFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
        default:
          SetFilteredTodos(todos);
          break;
    }
  };

  useEffect(() => {
    getLocalTodos();
  }, []);
  //USE EFFECT
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  //Save to Local
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') ===null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Vinh's Todo List</h1>
      </header>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus} 
      />
      <Todolist 
        setTodos={setTodos} 
        todos={todos} 
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;

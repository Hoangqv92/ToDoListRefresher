import React, { useState } from 'react';
import './App.css';

import Form from './components/Form';
import Todolist from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Vinh's Todo List</h1>
      </header>
      <Form setInputText={setInputText} />
      <Todolist />
    </div>
  );
}

export default App;

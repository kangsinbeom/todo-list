import React, { useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App(props) {
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      <TodoInsert todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList = {todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
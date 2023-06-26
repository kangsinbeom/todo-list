import React, { useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import "./App.css";
import GlobalStyle from './utils/GlobalStyle';

function App(props) {
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <GlobalStyle />
      <TodoInsert todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList = {todoList} setTodoList={setTodoList} />
    </>
  );
}

export default App;
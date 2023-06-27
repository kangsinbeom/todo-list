import React, { useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import "./App.css";
import GlobalStyle from './utils/GlobalStyle';
import { Context } from './components/Context';

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <Context.Provider value={{todoList, setTodoList}}>
      <GlobalStyle />
      <TodoInsert />
      <TodoList  />
    </Context.Provider>
  );
}

export default App;


// 이게 컨텍스트가 할아버지에서 손자에게 전해주는건 ㅇㅋ 이해함 근데 엄마에서 아빠로 옆에 있는 자식으로 줄때도 가능한가?

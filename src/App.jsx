import React, { useState } from 'react';
import "./App.css"
import TodoListItems from './components/TodoListItems';

function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [todoListItems, settodoListItems] = useState([
    {id : 1, title : "todolist 만들기", desc : "열심히 만들어보자"},
    {id : 2, title : "todolist 리펙토링하기", desc : "얼른 완성해보자"},
  ]);

  
  const onTitleChange = (event) => {
    setTitle(event.target.value)
  }
  
  const onDescChange = (event) => {
    setDesc(event.target.value)
  }

  const InsertTodoItem = () => {
    const newItem = {
      id : todoListItems.length+ 1,
      title,
      desc
    }
    settodoListItems([...todoListItems, newItem])
    
  }
  const removeItem = (id) => {
    const newList =  todoListItems.filter(item => item.id !== id);
    settodoListItems(newList);
  }
  return (
    <div>
      <header>
        <p>My Todo List</p>
        <p>react</p>
      </header>
      <main>
        제목 <input value={title} onChange={onTitleChange} />
        내용 <input value={desc} onChange={onDescChange}/>
        <button onClick={InsertTodoItem}>추가하기</button>
      </main>
      <div className='list-box'>
        <h2>working</h2>
        {
        todoListItems.map((item) => (
          <TodoListItems item = {item} key={item.id} removeItem = {removeItem} />  // props라는 객체 안에 밸류와 값이 담긴 형태이니까 무조건 변수= 값 형태로 내리는 게 맞네
        ))
        }
        
        <h2>Done</h2>
      </div>
    </div>
  );
}

export default App;
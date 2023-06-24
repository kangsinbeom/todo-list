import React from 'react';

function TodoListItems({todo, removeTodo, todoToComplete}) {
    
    
    

    return (
        <div className='todo-item'>
            <h2>{todo.title}</h2>
            <p>{todo.desc}</p>
            <button onClick={() => removeTodo(todo.id)} >삭제하기</button>
            <button  onClick={() => todoToComplete(todo.id)} >완료</button>
        </div>
    );
}

export default TodoListItems;
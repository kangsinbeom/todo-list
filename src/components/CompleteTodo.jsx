import React from 'react';

function CompleteTodo({todo, removeTodo, CompleteToTodo}) {
    
    
    

    return (
        <div className='todo-item'>
            <h2>{todo.title}</h2>
            <p>{todo.desc}</p>
            <button onClick={() => removeTodo(todo.id)}>삭제하기</button>
            <button onClick={() => CompleteToTodo(todo.id)}>취소</button>
        </div>
    );
}

export default CompleteTodo;
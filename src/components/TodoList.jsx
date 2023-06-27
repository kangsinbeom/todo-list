import React from 'react';
import TodoListItem from './TodoListItem';



function TodoList({ items }) {
    return (
        <div>
            {
            items.map(item => !item.checked && <TodoListItem key={item.id} title={item.title} desc={item.desc} id={item.id}/>)
            }
            <br></br>
            {
            items.map(item => item.checked && <TodoListItem key={item.id} title={item.title} desc={item.desc} id={item.id}/>)
            }
        </div>
    );
}

export default TodoList;
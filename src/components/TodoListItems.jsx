import React from 'react';

function TodoListItems(props) {
    return (
        <div>
            <h2>{props.item.title}</h2>
            <p>{props.item.desc}</p>
            <button onClick={() => props.removeItem(props.item.id)}>삭제하기</button>
            <button>완료</button>
        </div>
    );
}

export default TodoListItems;
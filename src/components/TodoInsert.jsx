import React, {useState} from 'react';

function TodoInsert({todoList, setTodoList}) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const onChangeDesc = (e) => {
        setDesc(e.target.value)
    }
    
    const insertTodo = () => {
        const newTodo = {
            title,
            desc,
            id : todoList.length + 1
        }
        setTodoList([...todoList, newTodo]);
        setTitle("");
        setDesc("");
        console.log(todoList)
    }
    return (
        <div>
            제목 : <input 
                value= {title}
                onChange={onChangeTitle}
                />
            내용 : <input
                value= {desc}
                onChange={onChangeDesc}
                />
            <button onClick={insertTodo}>추가하기</button>
        </div>
    );
}

export default TodoInsert;
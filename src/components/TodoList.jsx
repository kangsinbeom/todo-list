import React, { useState } from 'react';
import TodoListItems from './TodoListItems';
import CompleteTodo from './CompleteTodo';
import styled from "styled-components"

function TodoList({todoList, setTodoList}) {
    const [completeList, setCompleteList] = useState([]);
    
    const removeTodo = (id) => {
        const newList = todoList.filter(todo => todo.id !== id);
        setTodoList(newList)
    }

    const todoToComplete = (id) => {
        const newComplete = todoList.find(todo => todo.id === id);
        setCompleteList([...completeList, newComplete])

        const newList = todoList.filter(todo => todo.id !== id);
        setTodoList(newList)
    }

    const CompleteToTodo = (id) => {
        const newTodo = completeList.find(todo => todo.id === id);
        setTodoList([...todoList, newTodo])

        const newList = completeList.filter(todo => todo.id !== id);
        setCompleteList(newList)
    }

    return (
        <>
            <h2>working</h2>
            <StyledList>
                {
                todoList.map(todo => <TodoListItems todo ={todo} key={todo.id} removeTodo ={removeTodo} todoToComplete ={todoToComplete} />)
                }
            </StyledList>
            <h2>Done</h2>
            <StyledList>
                {
                completeList.map(todo => <CompleteTodo todo ={todo} key={todo.id} removeTodo ={removeTodo} CompleteToTodo ={CompleteToTodo} />)
                }
            </StyledList>    
        </>
    );
}


const StyledList = styled.div`
    width: 1300px;
    margin: auto;
    padding-left: 50px;
`;

export default TodoList;
import React, { useContext } from 'react';
import styled from "styled-components"
import { Context } from './Context';

function TodoListItems({todo}) {
    const data = useContext(Context);
    const {todoList, setTitle} = data 
    
    const removeTodo = (id) => {
        const newList = todoList.filter(todo => todo.id !== id);
        setTitle(newList)
    }

    return (
        <StyledItem>
            <h2>{todo.title}</h2>
            <p>{todo.desc}</p>
            <StyledItemBtn onClick={() => removeTodo(todo.id)} color='red'>삭제하기</StyledItemBtn>
            <StyledItemBtn color="green" >완료</StyledItemBtn>
        </StyledItem>
    );
}


const StyledItem = styled.div`
    border:4px solid teal;
    border-radius: 10px;
    width: 270px;
    height: 150px;
    padding: 20px;
    margin: 10px;
`;

const StyledItemBtn = styled.button`
    width: 120px;
    height: 40px;
    border: 2px solid ${(props)=> props.color};
    border-radius: 10px;
    background-color: transparent;
    font-size: 15px;
    font-weight: bold;
    margin-right: 10px;
`;

export default React.memo(TodoListItems);


// 템플릿 컴포넌트가 필요한 이유가 뭘까? 생각 좀 해보자
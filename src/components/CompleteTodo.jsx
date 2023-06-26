import React from 'react';
import styled from "styled-components"

function CompleteTodo({todo, removeTodo, CompleteToTodo}) {
    
    
    

    return (
        <StyledItem>
            <h2>{todo.title}</h2>
            <p>{todo.desc}</p>
            <StyledItemBtn onClick={() => removeTodo(todo.id)} color='red'>삭제하기</StyledItemBtn>
            <StyledItemBtn onClick={() => CompleteToTodo(todo.id)} color= "green">취소</StyledItemBtn>
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

export default CompleteTodo;
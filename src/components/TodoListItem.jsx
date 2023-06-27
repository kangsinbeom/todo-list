import React from 'react';
import styled from "styled-components"
import { useDispatch } from "react-redux";
import { deleteItem, toggleItem } from '../redux/modules/TodoList';
function TodoListItem({title, desc, id}) {
    const dispatch = useDispatch();
    
    const deleteHandler = (e) => {
        dispatch(deleteItem(id));
    }

    const ToggleHandler = (e) => {  
        dispatch(toggleItem(id));
    }

    return (
        <StDiv>
            <h2>{title}</h2>
            <p>{desc}</p>
            <button onClick={deleteHandler}>Delete</button>
            <button onClick={ToggleHandler}>Add</button>
        </StDiv>
        
    );
}

const StDiv = styled.div`
    border: 3px solid teal;
    border-radius: 10px;
    margin : 10px;
    width :300px;
    heigth :300px;
    @media screen and (max-width: 768px) {
        width : 200px; 
        heigth : 200px;
    } 

`;


export default TodoListItem;
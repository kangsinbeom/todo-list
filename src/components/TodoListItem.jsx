import React from 'react';
import styled from "styled-components"
import StyledButton from './common/button/StyledButton';
import EditingInput from './EditingInput';

function TodoListItem({item, deleteHandler, ToggleHandler}) {
    const {title, desc, id} = item;
    console.log(title, id, desc);

    return (
        <ItemWrapper>
            <header><h2>{title}</h2></header>
            <main><EditingInput id={id} desc={desc} /></main>
            <footer>
            <StyledButton onClick={() => deleteHandler(id)}>Delete</StyledButton>
            <StyledButton onClick={() => ToggleHandler(id)}>Add</StyledButton>
            </footer>
        </ItemWrapper>
        
    );
}

const ItemWrapper = styled.div`
    border: 3px solid black;
    border-radius: 20px;
    margin : 10px;
    width :300px;
    heigth :300px;
    padding : 10px;
    header {
        border-left: 10px solid gray;
        padding-left : 2%;
    }
    main {
        
        display : flex;
        justify-content : left;
        width : 80%;
        height : 40px;
        padding-left : 10px;
        border-bottom : 3px solid gray;
    }
    footer {
        display : flex;
        align-items : center;
        flex-direction : raw;
        margin-top : 20px;
        :first-child {
            margin-left : 35%;
        }

        :last-child {
            margin-left : auto;
            margin-right : 5%;
        }
    }

    @media screen and (max-width: 768px) {
        width : 200px; 
        heigth : 200px;
    } 

`;


export default TodoListItem;
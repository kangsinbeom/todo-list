import React, {useEffect, useState} from 'react';
import styled from "styled-components"
function TodoInsert({todoList, setTodoList}) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    
    // 최적화 1번 useEffect를 통해 input에 값이 들어갈 때마다 리랜더링 된것을 막아놓음
    // 이 부분을 콜백으로 쓴게 보이는데 useCallback 과 Effect의 차이점도 알면 좋겠네
    const onChangeTitle = useEffect((e) => {
        setTitle(e.target.value)
    }, [])

    const onChangeDesc = useEffect((e) => {
        setDesc(e.target.value)
    }, [])
    

    const insertTodo = () => {
        const newTodo = {
            title,
            desc,
            id : todoList.length + 1,
            checked : false
        }
        setTodoList([...todoList, newTodo]);
        setTitle("");
        setDesc("");
    }
    return (
        <StyledDiv>
            <StyledP>제목 :</StyledP> <StyledInput 
                value= {title}
                onChange={onChangeTitle}
                />
            <StyledP>내용 :</StyledP> <StyledInput
                value= {desc}
                onChange={onChangeDesc}
                />
            <StyledBtn onClick={insertTodo}>추가하기</StyledBtn>
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    background-color: #eee;
    width: 1300px;
    height: 100px;
    margin: auto;
    border-radius: 10px;

    justify-content:left ;
    display: flex;
    align-items:center;
    flex-direction: row;
    * {
        margin-right: 30px;
    }
    
`;
// 하위요소 전체 선택하는 방법
const StyledBtn = styled.button`
    margin-left: auto;
    width: 140px;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: teal;
    font-size: 15px;
    font-weight: bold;
    color: #EEEEEE;
`;

const StyledP = styled.p`
    font-size: 15px;    
    font-weight: bold;
    margin-left : 20px;
`;

const StyledInput = styled.input`
    width: 250px;
    height: 40px;
    border-radius: 10px;
    border: none;
`;
export default TodoInsert;
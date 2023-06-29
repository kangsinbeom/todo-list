import React, { useState } from 'react';
import StyledInput from './common/input/StyledInput';

const TodoInsert = ({onInsertHandler}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const onChangeTitleHandler = (e) => setTitle(e.target.value);
    const onChangeDescHandler = (e) => setDesc(e.target.value);
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
      // 유효성 검사
        if (title === "" || desc === "") return;
      // reducer에 데이터 보내기
        onInsertHandler({ title, desc });
      //Input Data 초기화
        setTitle("");
        setDesc("");
    };

    return (
        <form onSubmit={onSubmitHandler}>
            title : <StyledInput value={title} onChange={onChangeTitleHandler}/>
            desc : <StyledInput  value={desc} onChange={onChangeDescHandler}/>
            <button>input</button>
        </form>
    );
};



export default TodoInsert;
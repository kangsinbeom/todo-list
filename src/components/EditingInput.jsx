import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateItem } from '../redux/modules/TodoList';
// type undefined 날때에는 중괄호 넣기
function EditingInput({id, desc}) {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const [newDesc, setNewDesc] = useState("");
    
    const onChangeDescHandler = (e) => setNewDesc(e.target.value);
    const onChangeEditHandler = () => {
        edit && dispatch(updateItem({id, newDesc}));
        setEdit(!edit);
    }
    return (
        <>
            {
                edit ? 
                (
                    <div>
                        <input value={newDesc} onChange={onChangeDescHandler} />
                        <button onClick={()=>onChangeEditHandler()} type='button'>수정완료</button>
                    </div>
                ) : (
                    <p onDoubleClick={() =>onChangeEditHandler()}>{desc}</p>
                )
            }
        </>
    );
}

export default EditingInput;
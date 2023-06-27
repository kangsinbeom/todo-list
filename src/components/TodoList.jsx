import TodoListItems from './TodoListItems';
import styled from "styled-components"

function TodoList({todoList, setTodoList}) {
    
    
    return (
        <>
            <h2>working</h2>
            <StyledList>
                {
                todoList.map(todo => <TodoListItems todo ={todo} key={todo.id}/>)
                }
            </StyledList>
            <h2>Done</h2>
            <StyledList>
                {
                todoList.map(todo => <TodoListItems todo ={todo} key={todo.id}/>)
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
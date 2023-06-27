import {useSelector} from'react-redux'; 
import TodoList from "../components/TodoList";


const ListContainer = () => {
    const items = useSelector((state) => state.todolist);
    return <TodoList items={items} />;
};

export default ListContainer;
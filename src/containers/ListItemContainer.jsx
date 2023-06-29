import { useDispatch } from'react-redux'; 
import TodoListItem from "../components/TodoListItem";
import { deleteItem, toggleItem } from "../redux/modules/TodoList";

const ListItemContainer = ({item}) => {
    const dispatch = useDispatch();
    
    const deleteHandler = (input) => dispatch(deleteItem(input));

    const ToggleHandler = (input) => dispatch(toggleItem(input));
    
    return <TodoListItem item={item} deleteHandler={deleteHandler} ToggleHandler={ToggleHandler}  />;
};

export default ListItemContainer;
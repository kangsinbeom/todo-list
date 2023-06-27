import { useDispatch } from "react-redux";
import { insertItem } from "../redux/modules/TodoList";
import TodoInsert from "../components/TodoInsert";

const InsertContainer = () => {
    const dispatch = useDispatch();
    const onInsertHandler = (input) => dispatch(insertItem(input));
    return <TodoInsert onInsertHandler={onInsertHandler} />;
};

export default InsertContainer;
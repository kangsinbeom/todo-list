import {createStore} from "redux";
import {combineReducers} from "redux";
import todolist from "../modules/TodoList";

const rootReducer = combineReducers({
    todolist
});
const store = createStore(rootReducer);

export default store;

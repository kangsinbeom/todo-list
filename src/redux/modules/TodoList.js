const INSERT = "TodoList/INSERT"
const DELETE = "TodoList/DELETE"
const TOGGLE = "TodoList/TOGGLE"
const UPDATE = "TodoList/UPDATE"


let id = 3;

export const insertItem = ({title, desc}) => ({
    type : INSERT,
    todo : {
        id : id++,
        title,
        desc,
        checked: false,
    },
})

export const deleteItem = (id) => ({type : DELETE, id})

export const toggleItem = (id) => ({type : TOGGLE, id})

export const updateItem = ({id, newDesc}) => ({
    type : UPDATE,
    id,
    desc : newDesc,
})

const initialState = [
    {
        id: 1,
        title: "첫번째",
        desc: "첫번째",
        checked: false,
    },
    {
        id: 2,
        title: "두번째",
        desc: "두번째",
        checked: false,
    },
]

const todolist = (state = initialState, action) => {
    switch (action.type) {
        case INSERT:
            return state.concat(action.todo);
        case DELETE:
            return state.filter((todo) => todo.id !== action.id);
        case TOGGLE:
            let todo = state.find((todo) => todo.id === action.id);
            todo.checked =!todo.checked;
            return [...state];
        case UPDATE:
            return state.map((todo) => todo.id === action.id ? {...todo, desc : action.desc} : todo );
        default:
            return state;
    }
}
// update 부분에서 유효성검사를 제대로 하지 않아서 (&& => 3항연산자를 사용했음 ) 오류가 나는 부분이 있었음

export default todolist;
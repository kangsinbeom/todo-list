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
            return state.map((todo) => todo.id === action.id && {...todo, desc : action.desc});
        default:
            return state;
    }
}


export default todolist;
const INSERT = "INSERT"
const DELITE = "DELITE"
const TOGGLE = "TOGGLE"

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

export const deleteItem = (id) => ({type : DELITE, id})

export const toggleItem = (id) => ({type : TOGGLE, id})



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
        case DELITE:
            return state.filter((todo) => todo.id !== action.id);
        case TOGGLE:
            let todo = state.find((todo) => todo.id === action.id);
            todo.checked =!todo.checked;
            return [...state];
        default:
            return state;
    }
}


export default todolist;
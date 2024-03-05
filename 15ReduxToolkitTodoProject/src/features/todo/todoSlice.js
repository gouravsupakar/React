import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{
        id: 1,
        text: "hello world"
    }]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id : nanoid(),
                text: action.payload
            }

            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.
            id !== action.payload 
            )
        },

        // uptadeTodo: (state, action) => {
        //     state.todos = state.todos.map((todo) => todo.id
        //     === action.payload.id? {...todo, todo: action.payload.todo}: todo )
        // }
    }
})

export const {addTodo, removeTodo, uptadeTodo} = todoSlice.actions;

export default todoSlice.reducer;
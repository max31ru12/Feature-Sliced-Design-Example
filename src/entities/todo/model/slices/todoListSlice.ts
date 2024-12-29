import { createSlice, PayloadAction} from '@reduxjs/toolkit'

import { Todo } from "../../../../shared/api/todo/interfaces.ts";
import { fetchTodoList } from "../thunks/";


interface TodoListState {
    items: Todo[]
    isLoading: boolean
    error: null | string
}

const initialState: TodoListState = {
    items: [] as Todo[],
    isLoading: true,
    error: null,
}

const todoListSlice = createSlice({
    name: "todoList",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodoList.pending, (state: TodoListState) => {
            state.isLoading = true
            state.error = null
        }).addCase(fetchTodoList.fulfilled, (state: TodoListState, action: PayloadAction<Todo[]>) => {
            state.items = action.payload
            state.isLoading = false
            state.error = null
        }).addCase(fetchTodoList.rejected, (state: TodoListState) => {
            state.isLoading = false
            state.error = "Error fetching todos"
        })
    }
})

export default todoListSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../../../shared/api/todo/interfaces.ts";
import { fetchTodo, fetchTodoList } from "../thunks";
// import { updateTodo } from "../thunks";


interface TodoState {
    item: null | Todo
    isLoading: boolean
    error: null | string
}

const initialState: TodoState = {
    item: null,
    isLoading: true,
    error: null
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTodo.pending, (state: TodoState) => {
            state.isLoading = true
            state.error = null
        }).addCase(fetchTodo.fulfilled, (state: TodoState, action) => {
            state.isLoading = false
            state.item = action.payload
        }).addCase(fetchTodoList.rejected, (state: TodoState, action) => {
            state.error = action.error.message || "Error fetching todo"
            state.isLoading = false
        })
    }
})

export default todoSlice.reducer

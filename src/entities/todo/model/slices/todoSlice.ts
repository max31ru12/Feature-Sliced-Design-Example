import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../../../shared/api/todo/interfaces.ts";
import { fetchTodo, fetchTodoList } from "../thunks";
import { updateTodo } from "../thunks";


interface TodoState {
    item: Todo
    isLoading: boolean
    error: null | string
}

const initialState: TodoState = {
    item: {
        id: 0,
        title: "",
        userId: 0,
        completed: false
    },
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
        }).addCase(fetchTodoList.rejected, (state: TodoState) => {
            state.error = "Error fetching todo"
            state.isLoading = false
        }).addCase(updateTodo.pending, (state) => {
            state.isLoading = true
        }).addCase(updateTodo.fulfilled, (state, action) => {
            state.item = {...action.payload}
            state.isLoading = false
        }).addCase(updateTodo.rejected, (state) => {
            state.isLoading = false
            state.error = "Error updating todo"
        })
    }
})

export default todoSlice.reducer

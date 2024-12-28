import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTodoById } from "../../../../shared/api/todo";


export const fetchTodo = createAsyncThunk("todo/fetch", async (todoId: number) => {
    return await getTodoById(todoId)
})

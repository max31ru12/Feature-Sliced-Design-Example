import { createAsyncThunk } from "@reduxjs/toolkit";
import {updateTodoById} from "../../../../shared/api/todo";

export const updateTodo = createAsyncThunk("todo/update", async (todoId: number) => {
    return await updateTodoById(todoId)
})
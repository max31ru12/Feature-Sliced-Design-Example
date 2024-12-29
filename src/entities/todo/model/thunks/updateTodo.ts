import { createAsyncThunk } from "@reduxjs/toolkit";
import {updateTodoById} from "../../../../shared/api/todo";
import {Todo} from "../../../../shared/api/todo/interfaces.ts";

export const updateTodo = createAsyncThunk("todo/update", async (todo: Todo) => {
    return await updateTodoById(todo)
})
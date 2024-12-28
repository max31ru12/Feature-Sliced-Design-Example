import {createAsyncThunk} from "@reduxjs/toolkit";
import {getTodos} from "../../../../shared/api/todo";
import {QueryParams} from "../../../../shared/api/todo/interfaces.ts";

export const fetchTodoList = createAsyncThunk("todo-list/fetch", async (queryParams: QueryParams) => {
    return await getTodos(queryParams)
})
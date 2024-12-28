import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from "react-redux";

import todoListSlice from "../../entities/todo/model/slices/todoListSlice.ts";
import todoSlice from "../../entities/todo/model/slices/todoSlice.ts";

export const store = configureStore({
    reducer: {
        todos: todoListSlice,
        todo: todoSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

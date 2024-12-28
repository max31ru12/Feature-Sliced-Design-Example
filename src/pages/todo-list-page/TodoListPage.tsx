import { useEffect } from "react";

import { fetchTodoList } from "../../entities/todo";
import { useAppDispatch, useAppSelector } from "../../shared/store";
import { TaskCard } from "../../entities/todo";
import { Space, Spin } from "antd";

export const TodoListPage = () => {

    const { items, isLoading, error } = useAppSelector((state) => state.todos)

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTodoList({}))
    }, [dispatch])

    const todoList = items.map((item) => {
        return <li key={item.id}>
            <TaskCard title={item.title} id={item.id} completed={item.completed} />
        </li>
    })

    if (error !== null) {
        return <div>Errors</div>
    }

    return (
        <Space>
            { isLoading? <Spin /> : <ul>{todoList}</ul> }
        </Space>
    )
}
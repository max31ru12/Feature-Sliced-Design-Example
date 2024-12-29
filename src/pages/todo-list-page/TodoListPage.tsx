import { useEffect } from "react";

import { fetchTodoList } from "../../entities/todo";
import { useAppDispatch, useAppSelector } from "../../shared/store";
import { TaskRow } from "../../entities/todo";
import { Spin } from "antd";
import {ToggleTask} from "../../features/toggle-task";
import {TaskFilter} from "../../features/task-filter";


export const TodoListPage = () => {

    const { items, isLoading, error } = useAppSelector((state) => state.todos)

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTodoList({}))
    }, [dispatch])

    const todoList = items.map((item) => {
        return <li key={item.id}>
            <TaskRow
                title={item.title}
                id={item.id}
                action = {<ToggleTask defaultChecked={item.completed} todo={item} />}
            />
        </li>
    })

    if (error !== null) {
        return <div>Errors</div>
    }

    return (
        <div>
            <TaskFilter onChange={(params) => dispatch(fetchTodoList(params))}/>
            {isLoading ? <Spin/> : <ul style={{listStyle: "none"}}>{todoList}</ul>}
        </div>
    )
}
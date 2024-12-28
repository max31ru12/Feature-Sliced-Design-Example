import { useParams } from "react-router-dom";
import { useEffect } from "react";

import {fetchTodo, TaskCard} from "../../entities/todo";
import { useAppSelector, useAppDispatch } from "../../shared/store";
import { Space, Spin } from "antd";


export const TodoDetailsPage = () => {

    const { id } = useParams()

    const { item, isLoading, error } = useAppSelector((state) => state.todo)

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id) {
            dispatch(fetchTodo(Number(id)))
        }
    }, [id, dispatch]);

    if (error !== null) {
        return <div>Error: {errors}</div>;
    }

    return (
        <Space>
            { isLoading ? <Spin /> : <TaskCard title={item.title} id={item.id} completed={item.completed}/>}
        </Space>
    )
}
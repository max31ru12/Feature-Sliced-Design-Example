import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { fetchTodo, TaskCard } from "../../entities/todo";
import { useAppSelector, useAppDispatch } from "../../shared/store";
import { Space } from "antd";
import {ToggleTask} from "../../features/toggle-task";


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
        return <div>Error: {error}</div>;
    }

    return (
        <Space>
                <TaskCard
                    title={`Task#${item.id}`}
                    text={item.title}
                    actions={!isLoading? [<ToggleTask todo={item} defaultChecked={item.completed}/>]: []}
                    isLoading={isLoading}
                />
        </Space>
    )
}
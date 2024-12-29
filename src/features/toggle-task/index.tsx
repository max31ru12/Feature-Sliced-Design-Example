import { Checkbox } from "antd"
import { Todo } from "../../shared/api/todo/interfaces.ts";

import { useAppDispatch } from "../../shared/store";
import { updateTodo } from "../../entities/todo";

interface ToggleTaskProps {
    todo: Todo
    defaultChecked: boolean
}

export const ToggleTask = (props: ToggleTaskProps) => {

    const dispatch = useAppDispatch();

    return (
        <Checkbox
            defaultChecked={props.defaultChecked}
            onChange={(value) => dispatch(
            updateTodo({...props.todo, completed: value.target.checked}))}/>
    )
}

import { Checkbox } from "antd"
import { Todo } from "../../shared/api/todo/interfaces.ts";

interface ToggleTaskProps {
    todo: Todo
}

export const ToggleTask = ({ props }: ToggleTaskProps) => {
    return (
        <Checkbox onChange={(value) => UpdateTodo({ ...props.todo, completed: value.target.checked})}/>
    )
}

import { Card, Checkbox } from "antd";
import {Link} from "react-router-dom";

interface cardProps {
    title: string
    id: number
    completed: boolean
}

export const TaskCard = ( {title, id, completed }: cardProps) => {
    return (
        <Card>
            <Checkbox checked={completed}> </Checkbox>
            <Link to={`/${id}`}>{title}</Link>
        </Card>
    )
}
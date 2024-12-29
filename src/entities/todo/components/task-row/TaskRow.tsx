import {Card} from "antd";
import {Link} from "react-router-dom";
import {ReactNode} from "react";

interface cardProps {
    title: string
    id: number
    action: ReactNode
}

export const TaskRow = (props: cardProps) => {
    return (
        <Card>
            {props.action}
            <Link to={`/${props.id}`}>{props.title}</Link>
        </Card>
    )
}
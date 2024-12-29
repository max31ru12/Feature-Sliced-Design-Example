import {Card, Spin} from "antd";
import { ReactNode } from "react";
import { Link } from "react-router-dom";


interface TaskCardProps {
    title: string
    text: string
    actions: ReactNode[]
    isLoading: boolean;
}


export const TaskCard = (props: TaskCardProps) => {
    return (
        <Card
            loading={props.isLoading}
            title={props.isLoading? <Spin />: props.title}
            actions={props.actions}
            extra={<Link to={"/"}>Back</Link>}
        >
            {props.text}
        </Card>
    )
}
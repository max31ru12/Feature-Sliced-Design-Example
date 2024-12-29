import { Radio } from "antd";
import { QueryParams } from "../../shared/api/todo/interfaces.ts";
import { buttons } from "./config.ts";

interface FilterProps {
    onChange: (params: QueryParams) => void
}

export const TaskFilter = (props: FilterProps) => {

    const { Button, Group } = Radio;

    return (
        <Group defaultValue={"3"}>
            {buttons.map(
                ({id, title, params}) =>
                <Button
                    key={id}
                    value={id}
                    onClick={() => props.onChange(params)}
                >
                    {title}
                </Button>)
            }
        </Group>
    )
}
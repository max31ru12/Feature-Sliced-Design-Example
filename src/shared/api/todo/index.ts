import { Todo, QueryParams } from "./interfaces";
import axios from "axios";

const SLUG = 'todos';

export async function getTodos(params: QueryParams){
    const response = await axios.get<Todo[]>(SLUG, {params: params})
    return response.data
}

export const getTodoById = async (id: string) => {
    const response = await axios.get<Todo>(`${SLUG}/${id}`)
    return response.data
}

export const updateTodo = async (todo: Todo) => {
    const response = await axios.put<Todo>(`${SLUG}/${todo.id}`, todo)
    return response.data
}
import { Todo, QueryParams } from "./interfaces";
import axios from "axios";

const SLUG = 'todos';

export async function getTodos(params: QueryParams){
    const response = await axios.get<Todo[]>(`https://jsonplaceholder.typicode.com/${SLUG}`, {params: params})
    return response.data
}

export const getTodoById = async (id: number) => {
    const response = await axios.get<Todo>(`https://jsonplaceholder.typicode.com/${SLUG}/${id}`)
    return response.data
}

export const updateTodoById = async (todo: Todo) => {
    const response = await axios.put<Todo>(`${SLUG}/${todo.id}`, todo)
    return response.data
}
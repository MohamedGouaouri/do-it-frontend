import { useState } from "react"
import { TodoItem } from "./TodoItem"


export const TodoList = () => {
    const [todos, setTodos] = useState(["Hello", "Test", "Test", "Test", "Test", "Test", "Test"])
    return <div
        className="todos-list"
    >
        {
            todos.map((todo: any) => {
                return <TodoItem todo={todo} />
            })
        }

    </div>
}
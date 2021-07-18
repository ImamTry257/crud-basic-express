import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";

const TodoList = ({isRefresh, setRefresh}) => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        // calling API untuk mengambil data todo

        fetch("http://localhost:8080/todos")
        .then((res) => {
            setRefresh(false)
            return res.json();
        })
        .then((data) => {
            setRefresh(false)
            // simpan ke local state
            setTodos(data)
        })
        .catch((err) => {
            if(err.name == 'AbortError'){
                console.log('fect aborted.')
            }
        });
    }, [isRefresh, setRefresh]);

    return (
        <ul id="todo-list">
            {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} id={todo.title} setRefresh={setRefresh}/>
            ))}
        </ul>
    )
}

export default TodoList;
const TodoItem = ({todo, setRefresh}) => {
    const updateTodo = () => {
        todo.status = !todo.status

        fetch('http://localhost:8080/todos/'+todo.id, {
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(todo)
        }).then(() => {
            console.log('todo updated')
            setRefresh(true)
        })
    }

    const deleteTodo = () => {
        fetch('http://localhost:8080/todos/'+todo.id, {
            method : 'DELETE'
        }).then(() => {
            console.log('todo deleted')
            setRefresh(true)
        })
    }

    return (
        <li className={`${todo.status ? "checked" : ""}`}>
            <div onClick={updateTodo}>{todo.title}</div>
            <span class="close" onClick={deleteTodo}>x</span>
        </li>
    )
}

export default TodoItem;
import { useState } from 'react'
import './App.css'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoItem from './TodoItem'

export default function App() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a Todo App', completed: true },
    ])

    const [inputValue, setInputValue] = useState("")


    function handleInputChange(e) {
        setInputValue(e.target.value)
    }

    function handleAddTodo() {
        if (inputValue.trim() === "") return

        const newTodo = {
            id: Date.now(),
            text: inputValue,
            completed: false,
        }
        setTodos([...todos, newTodo])
        setInputValue("")
    }

    function handleToggleTodo(id) {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ))
    }

    function handleDeleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function handleFilterTodos() {
      return todos.filter(todo => todo.completed).length
    }

    return (
      <div>
      <TodoInput
      value={inputValue}
      onChange={handleInputChange}
      onAdd={handleAddTodo}
    />

      <TodoList
    todos={todos}
    onToggle={handleToggleTodo}
    onDelete={handleDeleteTodo}
    />

    <p>Tamamlanan: {handleFilterTodos()}</p>
      </div>

    )
}


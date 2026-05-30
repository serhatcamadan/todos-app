import { useState, useEffect } from 'react'
import Todo from './Todo.jsx';
import TodoList from './TodoList.jsx';


export default function App() {
        const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    const [todo, setTodo] = useState("");
    
    function addTodo(e){
            e.preventDefault();
            const newTodo = {
                id: Date.now(),
                text: e.currentTarget.todo.value.trim(),
                isCompleted: false
            };
            setTodos([...todos, newTodo]);
            setTodo("");
        }

    function deleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    function toggleComplete(id) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, isCompleted: !todo.isCompleted };
            }
            return todo;
        }));
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    
    return (
        <div className="flex items-center justify-center bg-gray-900 h-screen w-full">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col gap-6">
                <Todo todo={todo} setTodo={setTodo} addTodo={addTodo} />
                <TodoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
            </div>
        </div>
    )

}


import { useState } from 'react'

export default function TodoList({ todos, onToggle, onDelete }) {
    if (todos.length === 0) {
        return <p className="text-gray-500">No todos yet!</p>
    }
    
    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id} className="flex items-center justify-between mb-2">
                    <div>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => onToggle(todo.id)}
                            className="mr-2"
                        />
                        <span className={todo.completed ? "line-through" : ""}>
                            {todo.text}
                        </span>
                    </div>
                    <button 
                    className="inline-block rounded-sm block border border-red-600 bg-red-600 
                    px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl" href="#" 
                    onClick={() => onDelete(todo.id)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    )
}
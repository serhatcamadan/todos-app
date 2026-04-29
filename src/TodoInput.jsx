import { useState } from 'react'

export default function TodoInput({ value, onChange, onAdd }) {
    function handleKeyDown(e) {
    if (e.key === "Enter") {
        onAdd()
    }
}
    
    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={onChange}
                onKeyDown={handleKeyDown}
                placeholder="Add a new todo"
            />
            <button className="inline-block rounded-sm bg-indigo-600 
            px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl" href="#" 
            onClick={onAdd}>
                Add
                </button>
        </div>
    )
}
import { useState } from 'react'
import { FaBook } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";




export default function Todo({ todo, setTodo, addTodo }) {


    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-3">
                <FaBook className="text-2xl text-gray-700" />
                <h1 className="text-2xl font-bold text-gray-800">Todo App</h1>
            </div>
            <form onSubmit={addTodo} className="flex items-center gap-2">
                <label htmlFor="simple-search" className="sr-only">Todo Ekle ...</label>
                <input
                    type="text"
                    id="simple-search"
                    name="todo"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    className="flex-1 bg-gray-100 text-gray-800 placeholder:text-gray-400 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-teal-400"
                    placeholder="Todo Ekle ..."
                    required
                />
                <button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white rounded-lg p-2.5 cursor-pointer">
                    <IoIosAdd className="text-2xl" />
                </button>
            </form>
        </div>
    )

}


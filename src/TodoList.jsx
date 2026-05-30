import { MdDelete } from "react-icons/md";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { MdCheckCircleOutline } from "react-icons/md";




export default function TodoList({ todos, deleteTodo, toggleComplete }){
    return (
        <ul className="flex flex-col gap-2">
            {todos.map(todo => (
                <li key={todo.id} className="flex items-center gap-3 py-2 border-b border-gray-100 last:border-0">
                    <button onClick={() => toggleComplete(todo.id)} className="cursor-pointer shrink-0">
                        {todo.isCompleted
                            ? <MdCheckCircleOutline className="text-xl text-teal-500" />
                            : <MdOutlineRadioButtonUnchecked className="text-xl text-gray-400 hover:text-gray-600" />
                        }
                    </button>
                    <span className={`flex-1 text-gray-800 ${todo.isCompleted ? "line-through text-gray-400" : ""}`}>
                        {todo.text}
                    </span>
                    <button onClick={() => deleteTodo(todo.id)} className="cursor-pointer shrink-0">
                        <MdDelete className="text-xl text-red-400 hover:text-red-600" />
                    </button>
                </li>
            ))}
        </ul>
    )
}
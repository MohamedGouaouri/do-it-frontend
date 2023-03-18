import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './Todo.css'

interface TodoItemProps {
    todo: string
}


export const TodoItem = ({ todo }: TodoItemProps) => {
    return <div
        className='todo-item'
    >
        <div className='todo-text'>
            {todo}
        </div>
        <div className='todo-actions'>
            <button
                className='todo-complete'
            >
                <FontAwesomeIcon icon={faCheck} />
            </button>
            <button
                className='todo-delete'
            >
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    </div>
}
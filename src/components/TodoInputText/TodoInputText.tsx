
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './TodoInputText.css'



export const TodoInputText = () => {
    return <div className='todo-input'>
        <input placeholder='What is your next task ?' />
        <button>
            <FontAwesomeIcon icon={faPlus} />
        </button>
    </div>
}
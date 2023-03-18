import { TodoInputText } from '../TodoInputText/TodoInputText'
import { TodoList } from '../Todo/TodoList'
import './Main.css'

export const Main = () => {

    return <div className="main">
        <div className='header'>
            Today main focus
        </div>
        <TodoInputText />

        <TodoList />

    </div>
}

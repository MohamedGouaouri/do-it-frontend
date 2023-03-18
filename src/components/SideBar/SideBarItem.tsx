import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './SideBar.css'


interface SideBarItemProps {
    path: string
    itemIndex: number
    text: string
    isSelected: Boolean
    alignButtomn?: Boolean
    icon: any

    // onItemSelected: any
}
export const SideBarItem = ({ path, itemIndex, text, isSelected, alignButtomn, icon }: SideBarItemProps) => {

    const cls: string = clsx(
        "sidebar-item", isSelected ? "selected" : "non-selected", alignButtomn ? "align-buttomn" : ""
    )
    return <Link to={path} className={cls}
    >
        <div onClick={() => {
            console.log(itemIndex)
        }}

            className="side-bar-item-inner"

        >
            <FontAwesomeIcon icon={icon} />
            <div className='sidebar-item-text'>
                {text}
            </div>
        </div>
    </Link>
}

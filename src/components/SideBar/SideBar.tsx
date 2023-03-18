import './SideBar.css'
import { SideBarItem } from './SideBarItem'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

export const SideBar = () => {

    return <div className="sidebar">
        <div className='sidebar-header'>
            <div className='sidebar-header-profile'>
                <img src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" alt="" />
            </div>
            <div className='sidebar-header-info'>
                <div>
                    Do-it
                </div>
                <div className='sidebar-header-info-name'>
                    Mohammed Gouaouri
                </div>
            </div>
        </div>
        <ul className='sidebar-items'>
            <SideBarItem
                isSelected={true}
                itemIndex={0}
                path={"#"}
                text={"Today tasks"}
                icon={faCalendarDay}
                key={0}
            />

            <SideBarItem
                isSelected={false}
                itemIndex={1}
                path={"#"}
                text={"Scheduled tasks"}
                icon={faCalendarAlt}
                key={1}
            />

            <SideBarItem
                isSelected={false}
                itemIndex={2}
                path={"#"}
                text={"Settings"}
                icon={faGear}
                key={2}

            />


            <SideBarItem
                isSelected={false}
                itemIndex={3}
                path={"#"}
                text={"Logout"}
                icon={faArrowRightFromBracket}
                key={3}
                alignButtomn={true}
            />
        </ul>
    </div>
}
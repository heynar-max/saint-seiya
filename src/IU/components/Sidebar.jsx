import { IoCloseOutline, IoHomeOutline, IoLogInOutline, IoLogOutOutline, IoMedalOutline, IoSearchOutline } from 'react-icons/io5'
import '../../style/sidebar.css'
import { Link } from 'react-router-dom'
import { useUIStore } from '../../store'

export const Sidebar = () => {

    const isSideMenuOpen = useUIStore ( state => state.isSideMenuOpen);
    const isCloseMenu = useUIStore ( state => state.closeSideMenu);


    return (
        <div>
            {/* background black  */}
            {
                isSideMenuOpen &&(
                    <div 
                    className="sidebar_black"/>
                )
            }

            
            {/* blur  */}
            {
                isSideMenuOpen &&(
                    <div 
                    onClick={ isCloseMenu }
                    className='sidebar_blur'/>
                )
            }

            {/* sidermenu  */}
            <nav className={`sidebar_nav ${!isSideMenuOpen ? 'translate-x-full' : ''}`}>

                <IoCloseOutline
                    className='sidebar_nav_icon'
                    onClick={ () => isCloseMenu()}
                    />
                <div className='sidebar_search'>
                    <Link to='/search'>
                        <IoSearchOutline className="ico_search"/>
                    </Link>
                </div>

                {/* menú  */}

                <div className="sidebar_menu">
                    <Link 
                    className="siderbar_menu_link"
                    to='/'
                    onClick={ isCloseMenu }>
                        <IoHomeOutline className="ico_menu"/>
                        <span className='sidebar_span'>Inicio</span>
                    </Link>
                    <Link 
                    className="siderbar_menu_link"
                    to='/bronze'
                    onClick={ isCloseMenu }>
                        <IoMedalOutline className="ico_menu"/>
                        <span className='sidebar_span'>Bronze</span>
                    </Link>
                    <Link 
                    className="siderbar_menu_link"
                    to='/gold'
                    onClick={ isCloseMenu }>
                        <IoMedalOutline className="ico_menu"/>
                        <span className='sidebar_span'>Gold</span>
                    </Link>
                    <Link 
                    className="siderbar_menu_link"
                    to='/gold'
                    onClick={ isCloseMenu }>
                        <IoLogInOutline className="ico_menu"/>
                        <span className='sidebar_span'>Ingresar</span>
                    </Link>
                    <Link 
                    className="siderbar_menu_link"
                    to='/gold'
                    onClick={ isCloseMenu }>
                        <IoLogOutOutline className="ico_menu"/>
                        <span className='sidebar_span'>Salir</span>
                    </Link>
                </div>

            </nav>

        </div>
    )
}

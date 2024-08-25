import { IoCloseOutline, IoHomeOutline, IoLogInOutline, IoLogOutOutline, IoMedalOutline, IoSearchOutline } from 'react-icons/io5'
import '../../style/sidebar.css'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
    return (
        <div>
            {/* background black  */}
            <div className="sidebar_black"/>

            
            {/* blur  */}
            <div className='sidebar_blur'/>

            {/* sidermenu  */}
            <nav className='sidebar_nav'>

                <IoCloseOutline
                    className='sidebar_nav_icon'
                    onClick={ () => console.log('click')}
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
                    to='/'>
                        <IoHomeOutline className="ico_menu"/>
                        <span className='sidebar_span'>Inicio</span>
                    </Link>
                    <Link 
                    className="siderbar_menu_link"
                    to='/bronze'>
                        <IoMedalOutline className="ico_menu"/>
                        <span className='sidebar_span'>Bronze</span>
                    </Link>
                    <Link 
                    className="siderbar_menu_link"
                    to='/gold'>
                        <IoMedalOutline className="ico_menu"/>
                        <span className='sidebar_span'>Gold</span>
                    </Link>
                    <Link 
                    className="siderbar_menu_link"
                    to='/gold'>
                        <IoLogInOutline className="ico_menu"/>
                        <span className='sidebar_span'>Ingresar</span>
                    </Link>
                    <Link 
                    className="siderbar_menu_link"
                    to='/gold'>
                        <IoLogOutOutline className="ico_menu"/>
                        <span className='sidebar_span'>Salir</span>
                    </Link>
                </div>

            </nav>

        </div>
    )
}

import {  Link, NavLink} from "react-router-dom"
import '../../style/Navbar.css'
import logo from '../../assets/saint.png'
import { IoSearchOutline } from "react-icons/io5";
import { useUIStore } from "../../store";


export const Navbar = () => {

    const openSideMenu = useUIStore ( state => state.openSideMenu);

    
    return (
        <nav className="nav_header">

            {/* Logo  */}
            <div>
                <Link to="/">
                        <img className="navbar_logo" src={logo}/>
                </Link>
            </div>

            {/* Center Menu  */}
            <div className="center_menu">
                    <NavLink 
                        className={ ({isActive}) => `nav-item   ${ isActive ? 'active':'' }` } 
                        to="/bronze"
                    >
                        Bronze
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item   ${ isActive ? 'active':'' }` }
                        to="/gold"
                    >
                        Gold
                    </NavLink>

                    

                </div>

                {/* search, login, menu  */}
                <div className="sidebar">
                    <NavLink
                        className={({isActive}) => `nav-item   ${ isActive ? 'active':'' }` }
                        to="/search"
                        >
                            <IoSearchOutline />
                    </NavLink>
                    <button
                        className="onlogout_botton"
                        onClick={ openSideMenu }
                    >
                    menú
                    </button>
                </div>
                    
        </nav>
    )
}
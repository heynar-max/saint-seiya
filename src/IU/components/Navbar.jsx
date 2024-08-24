import {  Link, NavLink, useNavigate} from "react-router-dom"
import '../../style/Navbar.css'
import logo from '../../assets/saint.png'
import { IoSearchOutline } from "react-icons/io5";


export const Navbar = () => {

     // hook navegación
    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
             // objecto replace para que reemplaze la ruta donde se encuentra
            replace: true
        });
    }
    
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
                        onClick={ onLogout }
                    >
                    menú
                    </button>
                </div>
                    
        </nav>
        // <nav className="nav_header">
        //         <Link to="/">
        //             <img className="navbar_logo" src={logo}/>
        //         </Link>
        //         <div className="navbar-navigation">
        //             <NavLink 
        //                 className={ ({isActive}) => `nav-item   ${ isActive ? 'active':'' }` } 
        //                 to="/bronze"
        //             >
        //                 Bronze
        //             </NavLink>

        //             <NavLink 
        //                 className={ ({isActive}) => `nav-item   ${ isActive ? 'active':'' }` }
        //                 to="/gold"
        //             >
        //                 Gold
        //             </NavLink>

        //             <NavLink
        //             className={({isActive}) => `nav-item   ${ isActive ? 'active':'' }` }
        //             to="/search"
        //             >
        //                 Search
        //             </NavLink>

        //             <button
        //                 className="onlogout_botton"
        //                 onClick={ onLogout }
        //             >
        //             Login
        //             </button>
        //         </div>
        // </nav>
    )
}
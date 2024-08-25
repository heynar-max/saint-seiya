import { Link } from "react-router-dom"
import '../../style/NotFound.css'
import error from '../../assets/notfound_page.png'

export const NotFound = () => {
    return (
        <div className="container_notfound">
            <img className='image_notfound' src={error}/>
        <h1 className="text_notfound">404</h1>
        <h1 className="text_notfound">Página no encontrada</h1>
        <p className="parrafo_notfound">La página que estás buscando no existe.</p>
        <Link className='link_notfound' to="/">Ir a Inicio</Link>
    </div>
    )
}

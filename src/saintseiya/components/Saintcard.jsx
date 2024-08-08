import { Link } from 'react-router-dom';
import '../../style/CardStyle.css'
import PropTypes from 'prop-types';

export const Saintcard = ({
    id,
    saint, 
    caballero,
    image,
    img,
    rango, 
    }) => {
        const saintClass = rango.toLowerCase();
    return (
        <>

            <div className={`flip-card-container ${saintClass}`} >
            <div className="flip-card">

                <div className="card-front">
                <figure>
                    <div className="img-bg" ></div>
                    <img src={image} alt={saint}/>
                    <figcaption>{saint}</figcaption>
                </figure>

                <ul>
                    <li>{caballero}</li>
                    <li>{rango}</li>
                </ul>
                </div>

                <div className="card-back" >
                <figure>
                    <div className="img-bg"></div>
                    <img src={img} alt={saint}/>
                </figure>

                <button className="btn">
                    <Link className='card_link_card' to={`/saint/${ id }`}>
                    Ver Más...</Link>
                    </button>

                <div className="design-container">
                    <span className="design design--1"></span>
                    <span className="design design--2"></span>
                    <span className="design design--3"></span>
                    <span className="design design--4"></span>
                    <span className="design design--5"></span>
                    <span className="design design--6"></span>
                    <span className="design design--7"></span>
                    <span className="design design--8"></span>
                </div>
                </div>

            </div>
            </div>

    </>
    )
}

Saintcard.propTypes = {
    id: PropTypes.string.isRequired,
    saint: PropTypes.string.isRequired,
    caballero: PropTypes.string.isRequired,
    image:PropTypes.string.isRequired,
    img:PropTypes.string.isRequired,
    rango: PropTypes.string.isRequired,
    altura: PropTypes.string.isRequired,
    peso: PropTypes.string.isRequired,
};

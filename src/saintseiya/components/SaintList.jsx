import PropTypes from 'prop-types';
import { getSaintByRango } from '../helpers';
import { Saintcard } from './Saintcard';


export const SaintList = ({ rango }) => {

    const saints = getSaintByRango ( rango )
    return (
        <div className="cards__card" >
            {
                saints.map ( saint => 
                    <Saintcard
                        key={saint.id}
                        {...saint}
                    />
                )
            }
        </div>
    )
}

SaintList.propTypes = {
    rango: PropTypes.string.isRequired, // Assuming rango is a string, adjust if it's a different type
};
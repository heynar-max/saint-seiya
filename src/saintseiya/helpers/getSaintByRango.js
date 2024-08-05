import { saint } from '../data/saintseiyaData'


export const getSaintByRango = ( rango ) => {

    const ValidRango = ['Bronze Saints', 'Gold Saints']
    // if ! si el ValidRango no lo incluye el rango
    if ( !ValidRango.includes ( rango )){
        // El error
        throw new Error(`${rango} no es valido el rango`)
    }
    // pero si existe filtro los saint sanit.rango es igual a rango
    return saint.filter( saint => saint.rango === rango);
    
}

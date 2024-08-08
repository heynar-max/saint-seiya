import { saint } from "../data/saintseiyaData"



export const getSaintById = ( id ) => {
    // si encuenta el id muestrelo, si no lo encuentra da undefined
    return saint.find(saint => saint.id === id)
}

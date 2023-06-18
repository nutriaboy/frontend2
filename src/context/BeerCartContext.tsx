import React, { createContext, useReducer } from 'react'
import { Cerveza, beerCart } from '../interfaces/beerCartInterfaces';
import { BeerCartState, beerCartReducer } from '../reducers/beerCartReducer';
import connectionApi from '../api/ConnectionApi';

type BeerCartContextProps = {
    cervezas: Cerveza[] | null;
    beerCart: beerCart[] | [];
    errorMessage: string;
    obtenerCervezas: () => Promise<void>
    beerWarehouse: (...rest: any) => void
    updateAmountBeerWarehouse: (cantidad: number, idBeer: string) => void
    deleteBeerWarehouse: (idBeer: string) => void

}

const BeerCartInitialState: BeerCartState = {
    cervezas: null,
    beerCart: [],
    errorMessage: '',
}

export const BeerCartContext = createContext({} as BeerCartContextProps);

export const BeerCartProvider = ({ children }: any) => {

    const [stateBeer, dispatch] = useReducer(beerCartReducer, BeerCartInitialState);

    const obtenerCervezas = async () => {
        const { data } = await connectionApi.get('/cervezas?limite=100');
        if (data.ok) {
            const cervezas = data.cervezas.filter((cerveza: Cerveza) => (cerveza.stock !== 0) ? true : false);
            dispatch({
                type: 'getCervezas',
                payload: cervezas
            })
        }
    };

    const beerWarehouse = (...rest: any) => {
        const data = rest[0]

        const validarExistencia = stateBeer.beerCart.find(({ id }) => id == data.id);

        (validarExistencia)
            ? dispatch({ type: 'updateBeerWarehouse', payload: data })
            : dispatch({ type: 'beerWarehouse', payload: data })
    }

    const updateAmountBeerWarehouse = (cantidad: number, idBeer: string) => {
        console.log(cantidad, idBeer)
        dispatch({type: 'updateAmountBeer', payload: { idBeer, cantidad }});
    }

    const deleteBeerWarehouse = (idBeer: string) => {
        console.log(idBeer)
        dispatch({ type: 'deleteBeerWarehouse', payload: idBeer});
    }

        return (
            <BeerCartContext.Provider value={{
                ...stateBeer,
                obtenerCervezas,
                beerWarehouse,
                updateAmountBeerWarehouse,
                deleteBeerWarehouse,
            }}>
                {children}
            </BeerCartContext.Provider>

        )
    }

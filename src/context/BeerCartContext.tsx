import React, { createContext, useReducer } from 'react'
import { Cerveza } from '../interfaces/beerCartInterfaces';
import { BeerCartState, beerCartReducer } from '../reducers/beerCartReducer';
import connectionApi from '../api/ConnectionApi';

type BeerCartContextProps = {
    cervezas: Cerveza[] | null;
    errorMessage: string;
    obtenerCervezas: () => Promise<void>

}

const BeerCartInitialState: BeerCartState = {
    cervezas: null,
    errorMessage: '',
}

export const BeerCartContext = createContext({} as BeerCartContextProps);

export const BeerCartProvider = ({ children }: any) => {

    const [stateBeer, dispatch] = useReducer(beerCartReducer, BeerCartInitialState);

    const obtenerCervezas = async () => {
        const { data } = await connectionApi.get('/cervezas?limite=100');
        if(data.ok) {
            dispatch({
                type: 'getCervezas',
                payload: data.cervezas
            })
        }
    };

    return (
        <BeerCartContext.Provider value={{
            ...stateBeer,
            obtenerCervezas,
        }}>
            {children}
        </BeerCartContext.Provider>

    )
}

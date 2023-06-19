import React, { createContext, useReducer } from 'react'
import { Cerveza, beerCart } from '../interfaces/beerCartInterfaces';
import { BeerCartState, beerCartReducer } from '../reducers/beerCartReducer';
import connectionApi from '../api/ConnectionApi';
import { Venta } from '../interfaces/ventaInterfaces';
import { DetallesVenta } from '../interfaces/detalleVentaInterfaces';

type BeerCartContextProps = {
    cervezas: Cerveza[] | null;
    beerCart: beerCart[] | [];
    errorMessage: string;
    venta: Venta | {};
    detalleVenta: DetallesVenta[] | [];
    obtenerCervezas: () => Promise<void>;
    beerWarehouse: (...rest: any) => void;
    updateAmountBeerWarehouse: (cantidad: number, idBeer: string) => void;
    deleteBeerWarehouse: (idBeer: string) => void;
    cleaningBeerWarehouse: () => void;
    createVenta: (id: string, precio: number) => Promise<void>;
    createDetalleVenta: (...rest: any) => Promise<void>;

}

const BeerCartInitialState: BeerCartState = {
    cervezas: null,
    beerCart: [],
    errorMessage: '',
    venta: {},
    detalleVenta: [],
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
        dispatch({ type: 'updateAmountBeer', payload: { idBeer, cantidad } });
    }

    const deleteBeerWarehouse = (idBeer: string) => {
        dispatch({ type: 'deleteBeerWarehouse', payload: idBeer });
    }

    const cleaningBeerWarehouse = () => {
        dispatch({ type: 'cleaningBeerWarehouse' });
    }

    const createVenta = async(id : string, precio: number) => {
        const {data} = await connectionApi.post('/ventas', { usuario: id, precioTotal: precio })
        if (data.ok){
            const {venta} = data;
            // console.log(venta);
            dispatch({ type: 'createVenta', payload: venta});
        }
    }

    const createDetalleVenta =  async(dataDetalleVenta: any) => {
        const { data } = await connectionApi.post('/detalleVentas',  dataDetalleVenta);
        if (data.ok){
            const {detalleVenta} = data;
            dispatch({ type: 'createDetalleVenta', payload: detalleVenta});
        }
    }

    return (
        <BeerCartContext.Provider value={{
            ...stateBeer,
            obtenerCervezas,
            beerWarehouse,
            updateAmountBeerWarehouse,
            deleteBeerWarehouse,
            cleaningBeerWarehouse,
            createVenta,
            createDetalleVenta,
        }}>
            {children}
        </BeerCartContext.Provider>

    )
}

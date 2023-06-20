import { Cerveza, beerCart } from "../interfaces/beerCartInterfaces";
import { DetallesVenta } from "../interfaces/detalleVentaInterfaces";
import { Venta } from "../interfaces/ventaInterfaces";
import { VentasUsuario } from "../interfaces/ventasByUserInterfaces";



export interface BeerCartState {
    cervezas: Cerveza[] | null,
    beerCart: beerCart[] | [],
    errorMessage: string,
    venta: Venta | {},
    detalleVenta: DetallesVenta[] | []
    ventas: VentasUsuario[] | []
}

type BeerCartAction =
    | { type: 'getCervezas', payload: any }
    | { type: 'beerWarehouse', payload: any }
    | { type: 'updateBeerWarehouse', payload: any }
    | { type: 'updateAmountBeer', payload: { idBeer: string, cantidad: number } }
    | { type: 'deleteBeerWarehouse', payload: string }
    | { type: 'cleaningBeerWarehouse'}
    | { type: 'createVenta', payload: Venta }
    | { type: 'createDetalleVenta', payload: DetallesVenta }
    | { type: 'getVentasByUser', payload: any }


export const beerCartReducer = (state: BeerCartState, action: BeerCartAction): BeerCartState => {

    switch (action.type) {

        case 'getCervezas':
            return {
                ...state,
                cervezas: action.payload
            }

        case 'updateAmountBeer':
            return {
                ...state,
                beerCart: state.beerCart.map(beerCart => {
                    if (beerCart.id === action.payload.idBeer) {
                        return beerCart = {
                            ...beerCart,
                            cantidad: action.payload.cantidad
                        }

                    } else { return { ...beerCart } }


                }),
            }

        case 'deleteBeerWarehouse':
            return {
                ...state,
                beerCart: state.beerCart.filter(
                    beerCart => (beerCart.id === action.payload)
                        ? false
                        : true
                )
            }

        case 'beerWarehouse':
            return {
                ...state,
                beerCart: [...state.beerCart, action.payload]
            }

        case 'updateBeerWarehouse':
            return {
                ...state,
                beerCart: state.beerCart.map(
                    (arregloCarrito) => {
                        if (arregloCarrito.id === action.payload.id) {
                            let cantidad = arregloCarrito.cantidad + action.payload.cantidad
                            if (arregloCarrito.stock < cantidad) return { ...arregloCarrito }
                            return arregloCarrito = {
                                ...arregloCarrito,
                                cantidad: cantidad
                            }
                        }
                        else {
                            return { ...arregloCarrito }
                        }
                    }
                )
            }
        
        case 'cleaningBeerWarehouse':
            return { 
                ...state,
                beerCart: []
            }

        case 'createVenta':
            return {
                ...state,
                venta: action.payload
            }

        case 'createDetalleVenta' :
            return {
                ...state,
                detalleVenta: [...state.detalleVenta, action.payload]
            }

        case 'getVentasByUser':
            return {
                ...state,
                ventas: action.payload
            }

        default:
            return state;
    }
}
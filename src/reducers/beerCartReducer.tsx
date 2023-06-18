import { Cerveza, beerCart } from "../interfaces/beerCartInterfaces";



export interface BeerCartState {
    cervezas: Cerveza[] | null,
    beerCart: beerCart[] | [],
    errorMessage: string,
}

type BeerCartAction =
    | { type: 'getCervezas', payload: any }
    | { type: 'beerWarehouse', payload: any }
    | { type: 'updateBeerWarehouse', payload: any }

export const beerCartReducer = (state: BeerCartState, action: BeerCartAction): BeerCartState => {

    switch (action.type) {

        case 'getCervezas':
            return {
                ...state,
                cervezas: action.payload
            }

        case 'beerWarehouse':
            return {
                ...state,
                beerCart: [...state.beerCart, action.payload]
                // beerCart: state.beerCart.map(
                //     e => (e.cerveza === action.payload.cerveza)
                //         ? e.cantidad = e.cantidad + action.payload.cantidad
                //         : [...state.beerCart, action.payload]
                // )
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

        default:
            return state;
    }
}
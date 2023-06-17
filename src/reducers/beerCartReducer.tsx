import { Cerveza } from "../interfaces/beerCartInterfaces";



export interface BeerCartState {
    cervezas: Cerveza[] | null,
    errorMessage: string,
}

type BeerCartAction = 
    | { type: 'getCervezas', payload: any}

export const beerCartReducer = (state: BeerCartState, action: BeerCartAction): BeerCartState => {

    switch (action.type) {

        case 'getCervezas': 
            return {
                ...state,
                cervezas: action.payload
            }
        
        default: 
            return state;    
    }
}
import { Usuario } from "../interfaces/loginInterfaces";


export interface AuthState {

    status: 'checking' | 'authenticated' | 'not_authenticated';
    logged: boolean;
    token: string | null;
    errorMessage: string;
    user: Usuario | null;
}

type AuthAction =
    | { type: 'singUp', payload: { token: string, user: Usuario, logged: boolean } }
    | { type: 'addError', payload: string }
    | { type: 'logOut' }
    | { type: 'removeError' }
    | { type: 'not_authenticated' }

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {


        case 'singUp':
            return {
                ...state,
                errorMessage: '',
                status: 'authenticated',
                logged: action.payload.logged,
                token: action.payload.token,
                user: action.payload.user,
            }

        case 'removeError':
            return {
              ...state,
                errorMessage: ''
            }


        case 'logOut':
        case 'not_authenticated':
            return {
                ...state,
                status: 'not_authenticated',
                token: null,
                user: null,
                logged: false,
            }


        // case 'checking':
        //     return {
        //       ...state,
        //         status: 'checking'
        //     };
        // case 'authenticated':
        //     return {
        //       ...state,
        //         status: 'authenticated',
        //         logged: true
        //     };
        // case 'not_authenticated':
        //     return {
        //       ...state,
        //         status: 'not_authenticated',
        //         logged: false
        //     };
        default:
            return state;
    }
};
import React, { createContext, useContext, useState } from 'react';
import { AuthContext } from './AuthContext';
import { EditData } from '../interfaces/loginInterfaces';
import connectionApi from '../api/ConnectionApi';

type AuthContextProps = {
    // errorMessage: string;
    // token: string | null;
    // user: Usuario | null;
    // logged: boolean;
    // status: 'checking' | 'authenticated' | 'not_authenticated';
    // singUp: (registerData: RegisterData) => void;
    // singIn: (loginData: LoginData) => void;
    // logOut: () => void;
    // editUser: (rest_0: EditData) => Promise<void>
    // removeError: () => void;
    createSub: (data: any) => Promise<void>
}

export const SubContext = createContext({} as AuthContextProps);


const initialState = {
    subscription: {},

}

export const SubProvider = ({ children }: any) => {

    const { createSubscriptionUser } = useContext(AuthContext);

    const [subState, setSubState] = useState(initialState);

    const createSub = async (dataSub: EditData) => {
        try {
            const { id, telefono, ciudad, direccion, genero } = dataSub;
            createSubscriptionUser({ id, telefono, ciudad, direccion, genero });
            
            const { data } = await connectionApi.post('/suscriptores', { usuario:id });

            if (data.ok) {
                setSubState({...subState, subscription: data.suscriptor });
            }



        } catch (error) {
            console.log(error);
        }
    }

    return (
        <SubContext.Provider value={{
            ...subState,
            createSub
        }}>
            {children}
        </SubContext.Provider>
    );

}
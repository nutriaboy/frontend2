import React, { createContext, useContext, useState } from 'react';
import { AuthContext } from './AuthContext';
import { EditData } from '../interfaces/loginInterfaces';
import connectionApi from '../api/ConnectionApi';

type AuthContextProps = {
    subscription: {};
    isSubscriber: boolean;
    errorMessage: string;
    createSub: (data: any) => Promise<void>;
    obtenerSubById: (usuario: string) => Promise<void>;
}

export const SubContext = createContext({} as AuthContextProps);


const initialState = {
    subscription: {},
    isSubscriber: false,
    errorMessage: '',

}

export const SubProvider = ({ children }: any) => {

    const { createSubscriptionUser } = useContext(AuthContext);

    const [subState, setSubState] = useState(initialState);

    const createSub = async (dataSub: EditData) => {
        try {
            const { id, telefono, ciudad, direccion, genero } = dataSub;
            createSubscriptionUser({ id, telefono, ciudad, direccion, genero });

            const { data } = await connectionApi.post('/suscriptores', { usuario: id });

            if (data.ok) {
                setSubState({ ...subState, subscription: data.suscriptor });
            }


        } catch (error: any) {
            console.log(error);
        }
    }

    const obtenerSubById = async (usuario: string) => {
        try {
            const {data} = await connectionApi.get(`/suscriptores/${usuario}`);
            setSubState({...subState, subscription: data.suscriptor, isSubscriber: true });


        } catch (error: any) {
            console.log(error);
            setSubState({ ...subState, errorMessage: error.response.data.msg || 'Revisar la información', isSubscriber: false });
        }

    }

    return (
        <SubContext.Provider value={{
            ...subState,
            createSub,
            obtenerSubById
        }}>
            {children}
        </SubContext.Provider>
    );

}
import React, { createContext, useContext, useState } from 'react';
import { AuthContext } from './AuthContext';
import { EditData } from '../interfaces/loginInterfaces';
import connectionApi from '../api/ConnectionApi';
import { Sub, Suscriptor } from '../interfaces/subInterfeces';

type AuthContextProps = {
    subscription: Suscriptor | null;
    isSubscriber: boolean;
    errorMessage: string;
    createSub: (data: any) => Promise<void>;
    obtenerSubById: (usuario: string) => Promise<void>;
    deleteSub: (id: string) => Promise<void>;
}

export const SubContext = createContext({} as AuthContextProps);

interface SubState {
    subscription: Suscriptor | null;
    isSubscriber: boolean;
    errorMessage: string;
}

const initialState: SubState = {
    subscription: null,
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
                setSubState({ ...subState, subscription: data.suscriptor, isSubscriber: true });
            }


        } catch (error: any) {
            console.log(error);
            setSubState({ ...subState, errorMessage: error.response.data.msg || 'Revisar la información', isSubscriber: false });
        }
    }

    const obtenerSubById = async (usuario: string) => {
        try {
            const { data } = await connectionApi.get<Sub>(`/suscriptores/${usuario}`);
            if (data.ok) {
                setSubState({ ...subState, subscription: data!.suscriptor, isSubscriber: true });
            }

        } catch (error: any) {
            console.log(error);
            setSubState({ ...subState, errorMessage: error.response.data.msg || 'Revisar la información', isSubscriber: false });
        }

    }

    const deleteSub = async (id: string) => {
        try {
            const { data } = await connectionApi.delete(`/suscriptores/${id}`);
            if (data.ok) {
                setSubState({ ...subState, subscription: null, isSubscriber: false });
            }
        } catch (error: any) {
            console.log(error);
            setSubState({ ...subState, errorMessage: error.response.data.msg || 'Revisar la información' });
        }
    }

    return (
        <SubContext.Provider value={{
            ...subState,
            createSub,
            obtenerSubById,
            deleteSub
        }}>
            {children}
        </SubContext.Provider>
    );

}
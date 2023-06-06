import React, { createContext, useReducer, useEffect } from 'react';

import { EditData, LoginData, LoginDataResult, RegisterData, Usuario } from '../interfaces/loginInterfaces';
import { AuthState, authReducer } from '../reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import connectionApi from '../api/ConnectionApi';



type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    logged: boolean;
    status: 'checking' | 'authenticated' | 'not_authenticated';
    singUp: (registerData: RegisterData) => void;
    singIn: (loginData: LoginData) => void;
    logOut: () => void;
    editUser: (rest_0: EditData) => Promise<void>
    removeError: () => void;
}

const authInitialState: AuthState = {
    status: 'checking',
    logged: false,
    token: null,
    user: null,
    errorMessage: '',
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(authReducer, authInitialState);

    useEffect(() => {
        checkToken();
    }, [])


    const checkToken = async () => {
        const token = await AsyncStorage.getItem('token');

        // Si no existe el token
        if (!token) return dispatch({ type: 'not_authenticated' });

        // Si existe el token
        const resp = await connectionApi.get('/auth');
        if (resp.status !== 200) {
            return dispatch({ type: 'not_authenticated' });
        }
        await AsyncStorage.setItem('token', resp.data.token);

        dispatch({
            type: 'singUp',
            payload: {
                token: resp.data.token,
                user: resp.data.usuario,
                logged: true
            }
        });
    }

    const singIn = async ({ correo, password }: LoginData) => {
        try {
            const { data } = await connectionApi.post<LoginDataResult>('/auth/login', { correo, password });

            if (data.ok) {
                dispatch({
                    type: 'singUp',
                    payload: {
                        token: data.token,
                        user: data.usuario,
                        logged: true
                    }
                });

                await AsyncStorage.setItem('token', data.token);

            }

        } catch (error: any) {
            dispatch({
                type: 'addError',
                payload: error.response.data.msg || 'Información incorrecta'
            });
        }
    }

    const singUp = async ({ correo, password, nombre, apellido, rut }: RegisterData) => {
        try {
            // console.log(correo, password, nombre, apellido, rut);
            const { data } = await connectionApi.post<LoginDataResult>('/usuarios', {
                correo, password, nombre, apellido, rut
            });

            if (data.ok) {
                dispatch({
                    type: 'singUp',
                    payload: {
                        token: data.token,
                        user: data.usuario,
                        logged: true
                    }
                });

                await AsyncStorage.setItem('token', data.token);
            }

        } catch (error: any) {
            console.log(error);
            dispatch({
                type: 'addError',
                payload: error.response.data.msg || 'Revisar la información'
            });
        }
    }

    const editUser = async (...rest: [EditData]): Promise<void> => {

        try {
            const { id, nombre, apellido, correo, rut } = rest[0];

            const { data } = await connectionApi.put(`/usuarios/${id}`, {
                nombre, apellido, correo, rut
            });
            if (data.ok) {
                dispatch({
                    type: 'editUser',
                    payload: data.usuario
                });
            }

        } catch (error: any) {
            dispatch({
                type: 'addError',
                payload: error.response.data.msg || 'Revisar la información'
            });
        }
    };



    const logOut = async () => {
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'logOut' });
    }


    const removeError = () => dispatch({ type: 'removeError' });

    return (
        <AuthContext.Provider value={{
            ...state,
            singIn,
            singUp,
            logOut,
            editUser,
            removeError,
        }}>
            {children}
        </AuthContext.Provider>
    )
}





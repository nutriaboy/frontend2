import React, { createContext, useState } from 'react';

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
}

export const SubContext = createContext({} as AuthContextProps);


type initialState = {
    subscription: {};

}

export const SubProvider = ({ children }: any) => {


    const [subState, setSubState] = useState({
        
    })

    return (
        <SubContext.Provider value={{
            ...subState,
        }}>
            {children}
        </SubContext.Provider>
    );

}
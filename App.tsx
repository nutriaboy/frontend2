import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from "native-base";
import { AuthProvider } from './src/context/AuthContext';
import { SubProvider } from './src/context/SubContext';
import { StackNav } from './src/navigator/StackNavigator';


const AppState = ({ children }: any) => {

  return (
    <AuthProvider>
      <SubProvider>
        {children}
      </SubProvider>
    </AuthProvider>
  );
}


export const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <AppState>
          <StackNav />
        </AppState>
      </NativeBaseProvider>
    </NavigationContainer>

  )
}

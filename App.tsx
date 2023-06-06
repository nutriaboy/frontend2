import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNav } from './src/navigator/StackNavigator';
import { AuthProvider } from './src/context/AuthContext';
import { SubProvider } from './src/context/SubContext';


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
      <AppState>
        <StackNav />
      </AppState>
    </NavigationContainer>

  )
}

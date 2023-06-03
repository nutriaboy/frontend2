import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNav } from './src/navigator/StackNavigator';
import { AuthProvider } from './src/context/AuthContext';


const AppState = ({ children }: any) => {

  return (
    <AuthProvider>
      {children}
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

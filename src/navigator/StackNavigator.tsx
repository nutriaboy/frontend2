import React, { useContext } from 'react';

import { AuthContext } from '../context/AuthContext';

import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { LoadingScreen } from '../screens/LoadingScreen';
import TabsAndroid from './Tabs';
import { SubscriptionScreen } from '../screens/SubscriptionScreen';
// import TabsAndroid, { Tabs } from './Tabs';

const Stack = createStackNavigator();

export const StackNav = () => {

    const { status } = useContext(AuthContext);

    if (status === 'checking') return <LoadingScreen />

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid     ,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            {
                (status !== 'authenticated')
                    ? (
                        <>
                            <Stack.Screen name="LoginScreen" component={LoginScreen} />
                            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                        </>
                    )
                    : (
                        <>
                            <Stack.Screen name="Tabs" component={TabsAndroid} />
                            <Stack.Screen name="SubscriptionScreen" component={SubscriptionScreen} />
                        </>
                    )
            }

        </Stack.Navigator>
    );
}
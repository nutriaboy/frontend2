import React, { useContext } from 'react';

import { AuthContext } from '../context/AuthContext';

import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { LoadingScreen } from '../screens/LoadingScreen';
import TabsAndroid from './Tabs';
import { SubscriptionScreen } from '../screens/SubscriptionScreen';
import { ProfileSubScreen } from '../screens/ProfileSubScreen';
import { CervezaScreen } from '../screens/CervezaScreen';
import { ShoppingHistory } from '../screens/ShoppingHistory';

const Stack = createStackNavigator();

export const StackNav = () => {

    const { status } = useContext(AuthContext);

    if (status === 'checking') return <LoadingScreen />

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                // gestureDirection: 'vertical',
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
                            <Stack.Screen name="ProfileSubScreen" component={ProfileSubScreen} />
                            <Stack.Screen name="CervezaScreen" component={CervezaScreen} />
                            <Stack.Screen name="ShoppingHistory" component={ShoppingHistory} />
                        </>
                    )
            }

        </Stack.Navigator>
    );
}
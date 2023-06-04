import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Navigator } from './Navigator';
import { CartScreen } from '../screens/CartScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { ProfileScreen } from '../screens/ProfileScreen';
import { DefaultTheme, Provider } from 'react-native-paper';


const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            activeColor='#F8FFFF'
            inactiveColor='#A7A6E6'
            barStyle={{ backgroundColor: '#7764E3' }}
            shifting={true}

            // labeled={false} // label is optional 


        >

            <Tab.Screen
                name="Navigator"
                component={Navigator}
                options={{
                    tabBarLabel: 'Inicio',
                    // tabBarColor: '#694FAB',
                    tabBarIcon: ({ color }) => (
                        <Icon name="home-sharp" size={25} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="CartScreen"
                component={CartScreen}
                options={{
                    tabBarLabel: 'Carro',
                    tabBarBadge: 2, // Icono de norificaciones o false
                    // tabBarColor: '#009387',
                    tabBarIcon: ({ color }) => (
                        <Icon name="cart" size={30} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Perfil',
                    // tabBarColor: '#E3092D',
                    tabBarIcon: ({ color }) => (
                        <Icon name="person" size={25} color={color} />
                    )
                }}
            />

        </Tab.Navigator>
    );
}


const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      secondaryContainer: 'transparent', // Use transparent to disable the little highlighting oval
    },
  };
  
  export default function TabsAndroid() {
    return (
      <Provider theme={theme}>
        <Tabs />
      </Provider>
    );
  }
import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { View, useWindowDimensions, Image } from 'react-native';
import { styles } from '../theme/appTheme';
import { SubscriptionScreen } from '../screens/SubscriptionScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import TabsAndroid from './Tabs';


const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator
        screenOptions={{
            drawerType: width >= 768 ? 'permanent' : 'front',
            headerShown: width >= 768 ? false : true,
            headerStyle: {
              elevation: 0,
              shadowColor: 'transparent' // Para IOS
            },
            drawerStyle: {
                // backgroundColor: '#9B96F5',
                width:  width >= 768 ? 180 : 250
            }
        }}
            // drawerContent={(props) => <MenuInterno {...props} />}
            // screenOptions={{
            //     drawerType: width > 768 ? 'permanent' : 'front',
            //     // headerShown: false,
            //     headerStyle: {
            //         elevation: 0,
            //         shadowColor: 'transparent',
            //     },
            //     drawerStyle: {
            //         width: width >= 768 ? 180 : 250,
            //     }

            // }}

        >
            {/* <Stack.Screen name="Tabs" component={TabsAndroid} /> */}

            <Drawer.Screen name="TabsAndroid" component={TabsAndroid} />
            <Drawer.Screen name="SubscriptionScreen" component={SubscriptionScreen} />
        </Drawer.Navigator>
    );
}


const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>

            <View style={styles.avatarContainer}>
                <Image
                    style={styles.avatar}
                    source={require('../assets/avatar.webp')}
                />
            </View>

            {/* Opciones de Menú */}
            <View style={styles.menuContainer}>

                <TouchableOpacity
                    style={{
                        ...styles.menuBoton,
                        flexDirection: 'row'
                    }}
                    onPress={() => navigation.navigate('SubscriptionScreen')}
                >

                </TouchableOpacity>


            </View>


        </DrawerContentScrollView>
    );
}
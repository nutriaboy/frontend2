import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}



const Feed = () => {
  return (
    <View>
        <Text>PruebaDrawer</Text>
    </View>
  )
}


const Article = () => {
    return (
      <View>
          <Text>PruebaDrawer</Text>
      </View>
    )
  }
import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Item } from '../components/Item'

import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import { BeerCartContext } from '../context/BeerCartContext';


interface Props extends StackScreenProps<any, any> { };



export const ShoppingHistory = ({ navigation }: Props) => {

  const { ventas } = useContext(BeerCartContext);
  console.log(ventas)

  const renderItem = ({ item }: any) => {
    return (
      <Item data={item} />
    )

  }

  return (
    <View style={{ flex: 1, backgroundColor: '#7764E3' }}>
      <View style={{ position: 'absolute', top: 45, zIndex: 7 }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
        >
          <Icon
            name={'arrow-back-sharp'}
            color="white"
            size={50}
            style={{ marginLeft: 15 }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>

        <Text style={{ ...styles.title, marginLeft: 30 }}>
          Historial de Compra
        </Text>

        <View style={styles.itemContainer}>
          <FlatList
            data={ventas}
            renderItem={renderItem}
            style={{ width: '100%' }}
            contentContainerStyle={{
              alignItems: 'center',
              width: '100%',
              paddingBottom: 15,
            }}
          />

        </View>

      </View>
    </View>
  )
}



export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#000'
  },
  title: {
    top: 30,
    color: 'white',
    fontSize: 30,
    paddingTop: 10,
    fontWeight: 'bold',
    // backgroundColor: 'black',
  },
  itemContainer: {
    // marginBottom: 5,
    width: '100%',
    height: '84%',
    paddingTop: 1,
    // backgroundColor: 'black',
    top: '10%',

    alignItems: 'center',
  },

})


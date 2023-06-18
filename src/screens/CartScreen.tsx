import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, FlatList, RefreshControl, TouchableOpacity } from 'react-native';
import { Cart } from '../components/Cart'
import { BeerCartContext } from '../context/BeerCartContext';

import Icon from 'react-native-vector-icons/Ionicons';
import { beerCart } from '../interfaces/beerCartInterfaces';
import { loginStyles } from '../theme/loginStyles';


export const CartScreen = () => {

  const [refreshing, setRefreshing] = useState(false);
  const { beerCart } = useContext(BeerCartContext);

  const formatoChileno = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' });


  const onRefresh = () => {
    setRefreshing(true);

    setRefreshing(false);
  }



  const totalPrice = () => {
    if (beerCart.length === 0) return 0;

    const totalAcumulado = beerCart.map(
      (item: beerCart) => item.cantidad * item.precioUnit
    ).reduce(
      (acumulador: any, valor: any) => acumulador + valor);

    return totalAcumulado;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo} >Carro de Compra</Text>

      {
        (beerCart.length !== 0)
          ? (
            <>
              <FlatList

                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={40}
                  />
                }
                data={beerCart}
                // keyExtractor={(item, index) => item.cerveza}
                renderItem={({ item }) => <Cart data={item} />}
              />
              <View style={styles.containerTotal}>
                <Text style={styles.textTotal}>Total: {formatoChileno.format(totalPrice())}</Text>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{ ...loginStyles.button, borderRadius: 5, backgroundColor: "rgb(119,100,227)", borderColor: "rgb(119,100,227)", width: "70%", alignSelf: 'center' }}
                >
                  <Text style={{ ...loginStyles.buttonText, alignSelf: 'center', color: 'white' }}>
                    Pagar
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )
          : (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
              <Icon name="beer" size={30} color={'#7764E3'} style={{ left: 10 }} />
              <Icon name="cart" size={100} color={'#7764E3'} />
            </View>
          )
      }




    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  titulo: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemNombre: {
    fontSize: 16,
    flex: 1,
  },
  containerTotal: {
    position: 'absolute',
    backgroundColor: 'white',
    borderTopWidth: 5,
    borderTopColor: 'rgba(0, 0, 0, 0.01)',
    bottom: 0,
    width: '110%',
    height: '20%',
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -9,
    },
    shadowOpacity: 1,
    shadowRadius: 16.00,

    elevation: 19,
  },
  textTotal: {
    color: 'black',
    alignSelf: 'center',
    padding: 10,
    fontSize: 25,
    fontWeight: 'bold',

  },
})
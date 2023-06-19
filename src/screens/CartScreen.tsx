import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, FlatList, RefreshControl, TouchableOpacity, Modal, Pressable } from 'react-native';
import { Cart } from '../components/Cart'
import { BeerCartContext } from '../context/BeerCartContext';

import Icon from 'react-native-vector-icons/Ionicons';
import { beerCart } from '../interfaces/beerCartInterfaces';
import { loginStyles } from '../theme/loginStyles';
import { stylesSub } from './SubscriptionScreen';


interface renderItem {
  item: beerCart
}


export const CartScreen = () => {

  const [refreshing, setRefreshing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { beerCart } = useContext(BeerCartContext);

  const formatoChileno = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' });


  const onRefresh = () => {
    setRefreshing(true);

    setRefreshing(false);
  }

  const PayBeer = () => {
    console.log('hola')
  }


  const renderItem = ({ item }: renderItem): any => {
    return (
      <View style={{ flexDirection: 'row', height: 30, marginTop: 5, borderBottomColor: 'rgba(0, 0, 0,0.12)',
      borderBottomWidth: 1, paddingBottom: 2, padding: 1 }}>
        <Text style={{ fontSize: 20, marginLeft: 10, backgroundColor: 'rgba(120,120,120,0.1)', color: 'black'}}> {item.cantidad} </Text>
        <Text style={{ fontSize: 20, color: 'black'}}> {item.nombre} - {item.marca} </Text>
      </View>
    )
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
                  onPress={() => setOpenModal(!openModal)}
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


      {/*-----------Modal Inicio----------*/}
      <Modal
        animationType='fade'
        visible={openModal}
        transparent={true}
      >
        <View style={stylesSub.containerModal}>
          <View style={{ ...stylesSub.modalScreen, height: 500 }}>

            <View style={stylesSub.sectionTitle}>
              <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 20,
                color: 'black'
              }}>Tu Pedido</Text>
            </View>

            <View style={styles.sectionContainer}>

              <FlatList
                data={beerCart}
                renderItem={renderItem}
              />

              <View style={{marginBottom: 30}}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>Total: {formatoChileno.format(totalPrice())}</Text>
              </View>

            </View>



            <View style={stylesSub.sectionBtn}>

              <Pressable
                onPress={() => {
                  setIsVisible(!isVisible);
                  setOpenModal(!openModal);

                }}

                style={{ ...stylesSub.blackButton, marginBottom: 10, alignSelf: 'center' }}
              >
                <Text style={stylesSub.buttonText}>Confirmar</Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  setOpenModal(!openModal);
                }}
                style={{ marginBottom: 15 }}
              >
                <Text style={{ ...stylesSub.buttonTextModal, alignSelf: 'center' }}>Cancelar</Text>
              </Pressable>
            </View>


          </View>

        </View>
      </Modal>
      {/*-----------Modal Fin----------*/}

      {/*-----------Modal Inicio----------*/}
      <Modal
        animationType='fade'
        visible={isVisible}
        transparent={true}
      >
        <View style={stylesSub.containerModal}>
          <View style={stylesSub.modalScreen}>

            <View style={stylesSub.sectionTitle}>
              <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 20,
                color: 'black'
              }}> WebPay</Text>
            </View>

            <View style={stylesSub.sectionBtn}>

              <Pressable
                onPress={PayBeer}
                style={{ ...stylesSub.blackButton, marginBottom: 10, alignSelf: 'center' }}
              >
                <Text style={stylesSub.buttonText}>Pagar</Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  setIsVisible(!isVisible);
                }}
                style={{ marginBottom: 15 }}
              >
                <Text style={{ ...stylesSub.buttonTextModal, alignSelf: 'center' }}>Cancelar</Text>
              </Pressable>
            </View>


          </View>

        </View>
      </Modal>
      {/*-----------Modal Fin----------*/}


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
  sectionContainer: {
    // backgroundColor: 'red',
    width: '100%',
    height: '70%',
    padding: 10,
    marginBottom: 20,
  },
})
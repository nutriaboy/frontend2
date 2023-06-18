import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, Alert, TouchableOpacity, FlatList, RefreshControl } from 'react-native';
import { Actionsheet, Box, Button, Center, useDisclose } from "native-base";
import { CommonActions, useNavigation } from '@react-navigation/native';

import { AuthContext } from '../context/AuthContext';
import { SubContext } from '../context/SubContext';
import { BeerItem } from '../components/BeerItem';

import Icon from 'react-native-vector-icons/Ionicons';
import { BeerCartContext } from '../context/BeerCartContext';



export const ProtectedScreen = () => {

  const { user, token, logOut } = useContext(AuthContext);
  const { obtenerSubById, isSubscriber } = useContext(SubContext);
  const { obtenerCervezas, cervezas } = useContext(BeerCartContext);
  const [refreshing, setRefreshing] = useState(false);



  const navigator = useNavigation();

  const { isOpen, onOpen, onClose } = useDisclose();


  useEffect(() => {
    obtenerSubById(user!.uid);
    obtenerCervezas();
  }, [])


  const handleLogOut = () => {
    onClose();
    Alert.alert('Cerrar Sesión', '¿Desea salir de la sesión?', [
      {
        text: 'Cancelar',
        onPress: () => null
      },
      {
        text: 'OK',
        onPress: () => logOut()
      }]);
  }

  const handleNewSub = () => {
    onClose();
    navigator.dispatch(
      CommonActions.navigate({
        name: 'SubscriptionScreen',
      })
    )
  }

  const handleSub = () => {
    onClose();
    navigator.dispatch(
      CommonActions.navigate({
        name: 'ProfileSubScreen',
      })
    )
  }

  const onRefresh = () => {
    setRefreshing(true);
    obtenerCervezas();

    setRefreshing(false);
  }




  return (
    <View style={styles.container}>

      <Text style={styles.title}>Cervezas</Text>

      <View style={styles.containerButtons}>
      
        <TouchableOpacity
          activeOpacity={0.5}
          style={{ ...styles.buttonSub, left: 50 }}
          onPress={onOpen}
        // onPress={handleSub}
        >
          <Icon name="menu" size={40} />
          {/* <Text style={styles.textButtonSub}>Suscríbete </Text> */}
        </TouchableOpacity>

      </View>


      {/* Inicio de ActionSheet */}
      <Center>
        {/* <Button onPress={onOpen}>Actionsheet</Button> */}
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content>
            <Box w="100%" h={60} px={4} justifyContent="center" >
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
              {(user?.genero === 'F') ? "Bienvenida: " : "Bienvenido: "} {user?.nombre} {user?.apellido} 😊
              </Text>
            </Box>

            {
              (!isSubscriber) ? (
                <Actionsheet.Item onPress={handleNewSub}>
                  Suscríbete!
                </Actionsheet.Item>
              ) : (
                <Actionsheet.Item onPress={handleSub}>
                  Suscripción
                </Actionsheet.Item>
              )

            }

            {/* <Actionsheet.Item isDisabled>Share</Actionsheet.Item>
            <Actionsheet.Item >
              <Text style={{ color: '#FFA3A2', fontSize: 16, margin: 0, }}>Favourite</Text>
            </Actionsheet.Item> */}

            <Actionsheet.Item onPress={handleLogOut} >
              <Text style={{ color: '#FF4659', fontSize: 16, margin: 0, }}>Cerrar Sesión</Text>
            </Actionsheet.Item>
            <Actionsheet.Item onPress={() => onClose()} >Cancelar</Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet>
      </Center>
      {/* Fin de ActionSheet */}


      <View style={styles.cards}>
        <FlatList
          style={{ marginRight: 5}}
          contentContainerStyle={{
            padding: 5
          }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              progressViewOffset={40}
            />
          }
          
          numColumns={2}
          data={cervezas}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <BeerItem data={item} />}

        />


      </View>

    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    margin: 8,
    top: 15,
    paddingLeft: 16,

    // left: 30,
  },
  instructions: {
    color: '#333333',
    fontSize: 15,
    marginBottom: 5,
  },
  cards: {
    top: '0%',
    borderTopWidth: 2,
    borderTopColor: 'rgba(238, 238, 238, 0.8)',
    // marginLeft: '0%',
    width: '100%',
    height: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    // backgroundColor:'purple',
  },
  containerButtons: {
    width: 115,
    alignSelf: 'flex-end',
    top: -40,
    
  },
  buttonExited: {
    backgroundColor: '#F1FCFF', //#F1FCFF
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    width: 115,
    alignSelf: 'center',
  },
  textButtonExited: {
    color: '#FFA3A2',
    fontSize: 16,
    // fontWeight: '100',
    textAlign: 'center',
  },
  buttonSub: {
    // backgroundColor: '#F1FCFF', //#F1FCFF
    borderRadius: 10,
    borderColor: 'black',
    // borderWidth: 1,
    width: 115,
    alignSelf: 'center',
    marginTop: 5,
  },
  textButtonSub: {
    // color: '#FFA3A2',
    fontSize: 16,
    // fontWeight: '100',
    textAlign: 'center',
  },


});
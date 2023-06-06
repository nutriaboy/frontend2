import React, { useContext } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { BeerItem } from '../components/BeerItem';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CommonActions, useNavigation } from '@react-navigation/native';

export const ProtectedScreen = () => {

  const { user, token, logOut } = useContext(AuthContext);

  const navigator = useNavigation();
 

  const handleLogOut = () => {
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

  const handleSub  = () => {
    navigator.dispatch(
      CommonActions.navigate({
          name: 'SubscriptionScreen',
      })
  )
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Cervezas</Text>

    <View style ={styles.containerButtons}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.buttonExited}
        onPress={handleLogOut}
      >
        <Text style={styles.textButtonExited}>Cerrar Sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.buttonSub}
        onPress={handleSub}
      >
        <Text style={styles.textButtonSub}>Suscríbete </Text>
      </TouchableOpacity>

    </View>

   

     
      {/* <Text 
        style={styles.instructions}
        >
          { JSON.stringify( user, null, 5 )}
        </Text>
        <Text
          style={styles.instructions}
        >
          { token}
        </Text>
         <Button 
          title="Log Out"
          color="#841584"
          onPress={logOut}
        />  */}

      <View style={styles.cards}>
        <BeerItem />
        <BeerItem />
        <BeerItem />
        <BeerItem />
        <BeerItem />
        <BeerItem />
        <BeerItem />
        <BeerItem />
        <BeerItem />
        <BeerItem />
        <BeerItem />

      </View>

    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 30,
    margin: 10,
    top: 80,
    left: 30,
  },
  instructions: {
    color: '#333333',
    fontSize: 15,
    marginBottom: 5,
  },
  cards: {
    top: '25%',
    marginLeft: '1%',
    width: '98%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    // backgroundColor:'purple',
    flexWrap: 'wrap',
  },
  containerButtons: {
    width: 115,
    alignSelf: 'flex-end',
    right: 15,
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
    backgroundColor: '#F1FCFF', //#F1FCFF
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
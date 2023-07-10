import React from 'react'
import { CommonActions, useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';

// const uri = require('../assets/salud.png');


export const BeerItem = ({data}: any) => {

  const navigator = useNavigation();
  const formatoChileno = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' });


  const onPress = () => {
    navigator.dispatch(
      CommonActions.navigate({
        name: 'CervezaScreen',
        params: {data}
      })
    )
  }

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.card}
      onPress={onPress} 

    >
      <Image
        style={styles.beerImg}
        source={ require('../assets/cerveza.jpg') }
      />
      <View style={styles.sectionText}>
        <Text style={styles.beerText}>{formatoChileno.format(data.precioUnit)}</Text>
        <Text style={{...styles.beerText, fontSize: 17}}>{data.nombre} - {data.marca}</Text>
      </View>
    </TouchableOpacity>
  )
}




const styles = StyleSheet.create({

  card: {
    width: 190,
    height: 300,
    marginBottom: 10,
    marginLeft: 2,
    marginRight: 2,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',

  },
  sectionText: {
    backgroundColor: 'rgba(240, 240, 240,0.5)',
    borderTopWidth: 2,
    borderTopColor: 'rgba(240, 240, 240, 0.02)',
    position: 'absolute',
    width: '100%',
    height: '25%',
    justifyContent: 'center',
    bottom: 0,

  },
  beerText: {
    marginLeft: 2,
    fontSize: 20,
    fontWeight: 'bold',

  },
  beerImg: {
    width: '100%',
    height: '100%',
  }

})
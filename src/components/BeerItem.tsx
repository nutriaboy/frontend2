import React from 'react'
import { CommonActions, useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';

const uri = 'https://chambriao.cl/wp-content/uploads/2021/08/Cruz-de-Malta-GOLDEN-ALE-1.jpg';


export const BeerItem = ({data}: any) => {

  const navigator = useNavigation();

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
        source={{ uri }}
      />
      <View style={styles.sectionText}>
        <Text style={styles.beerText}>{data.nombre} - {data.marca}</Text>
      </View>
    </TouchableOpacity>
  )
}




const styles = StyleSheet.create({

  card: {
    width: 190,
    height: 190,
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
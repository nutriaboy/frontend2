import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { loginStyles } from '../theme/loginStyles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { CommonActions, useNavigation } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/Ionicons';


const uri = 'https://chambriao.cl/wp-content/uploads/2021/08/Cruz-de-Malta-GOLDEN-ALE-1.jpg';


export const CervezaScreen = ({ route }: any) => {
  const { data } = route.params

  const navigator = useNavigation();
  // console.log(data);

  const onPress = () => {
    navigator.dispatch(
      CommonActions.navigate({
        name: 'Tabs',
      })
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#7764E3' }}>
      <View
        style={{ ...loginStyles.formContainer, justifyContent: 'center', marginBottom: 0 }}
      >
        <View style={{ position: 'absolute', top: 20 }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={{
              backgroundColor: 'black',
              borderRadius: 300,
              alignItems: 'center',
              justifyContent: 'center',
              width: 60,
              height: 60,
              marginLeft: 15
            }}
          >
            <Icon
              name={'arrow-back-sharp'}
              color="white"
              size={55}
              style={{ marginLeft: 0 }}
            />
          </TouchableOpacity>
        </View>



        <Text style={{ ...loginStyles.title, marginLeft: 15, alignSelf: 'center' }}>{data.nombre}</Text>

        <View style={styles.card}>
          <Image
            style={styles.beerImg}
            source={{ uri }}
          />
        </View>

        <View style={styles.containerText}>
          <Text style={styles.textData}>
            Precio: ${data.precioUnit}
          </Text>
          <Text style={styles.textData}>
            Marca: {data.marca}
          </Text>
          <Text style={styles.textData}>
            Tipo Cerveza: {data.tipoCerveza.nombre}
          </Text>
          <Text style={styles.textData}>
            stock: {data.stock}
          </Text>
        </View>

      </View>
    </View>
  )
}


const styles = StyleSheet.create({

  card: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',

  },
  beerImg: {
    marginTop: 20,
    borderRadius: 40,
    width: '90%',
    height: '100%',
    resizeMode: 'contain'
  },
  containerText: {
    marginTop: 25,
    width: '100%',
    height: 300,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 40,
    justifyContent: 'space-around',
    textAlign: 'center',


  },
  textData: {
    marginLeft: 20,
    fontSize: 17,
    fontWeight: '500',
    color: 'black',

  },

})
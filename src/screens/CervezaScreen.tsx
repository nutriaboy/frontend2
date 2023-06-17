import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { loginStyles } from '../theme/loginStyles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { CommonActions, useNavigation } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/Ionicons';


const uri = 'https://chambriao.cl/wp-content/uploads/2021/08/Cruz-de-Malta-GOLDEN-ALE-1.jpg';


export const CervezaScreen = ({ route }: any) => {
  const { data } = route.params

  const [countStock, setCountStock] = useState(1);

  const navigator = useNavigation();




  const onPress = () => {
    navigator.dispatch(
      CommonActions.navigate({
        name: 'Tabs',
      })
    )
  }

  const restStock = () => { 
    if (countStock > 1) {
      setCountStock(countStock - 1)
    }  
  }

  const addCart = () => {

    console.log(data.id, countStock);
    onPress();

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


        <View
          style={styles.containerButton}
        >

          <View style={{ flexDirection: 'row', marginBottom: 10, backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 10, }}>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.buttonsStocking}
              onPress={restStock}
            >
              <Text style={styles.buttonText}>
                -
              </Text>
            </TouchableOpacity>

            <Text style={{ ...styles.buttonText, paddingLeft: 10, paddingRight: 10 }}>
              {countStock}
            </Text>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.buttonsStocking}
              onPress={()=> setCountStock(countStock + 1 )}
            >
              <Text style={styles.buttonText}>
                +
              </Text>
            </TouchableOpacity>

          </View>


          <TouchableOpacity
            activeOpacity={0.8}
            style={{ ...styles.button }}
            onPress={addCart}
          >
            <Text style={styles.buttonText}>
              Añadir al Carro
            </Text>
          </TouchableOpacity>
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
    height: 250,
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
  containerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  button: {
    backgroundColor: 'white',
    width: 330,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttonText: {
    fontSize: 18,
    color: '#1c1c1c',
    fontWeight: 'bold',

  },
  buttonsStocking: {
    backgroundColor: 'white',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  }

})
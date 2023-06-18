import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const uri = 'https://chambriao.cl/wp-content/uploads/2021/08/Cruz-de-Malta-GOLDEN-ALE-1.jpg'


export const Cart = ({data}: any) => {
    // console.log(data);
  return (
    <View
        style={ styles.card}
    >
        <View style={styles.userInfo}>
            <Image
                style={ styles.userImg }
                source={{ uri }}
            />
            <View style={styles.textSection}> 
               <Text style={ styles.userName }> {data.nombre}</Text>
            
               <Text style={ styles.userName }>Cantidad: {data.cantidad}</Text>

            </View>
            <View style={{ right: 20}}>
                {/* chevron-forward-sharp */}
                <Icon 
                    name={ 'chevron-forward-sharp' }
                    color="rgba(66, 66, 66, 0.7)"
                    size={ 25 }
                    style={{ top: '30%', position:'absolute'}}
                /> 
            </View>

        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    card: {
    
        width: '100%',
        height: 100,
        backgroundColor: 'rgba(119, 100, 227, 0.11)',
        borderBottomColor: 'rgba(119, 100, 227, 0.8)',
        // #F1FCFF rgba(28, 28, 28, 0.5)
        borderBottomWidth: 1,
        borderRadius: 15,
        marginTop: 20,
        justifyContent: 'center',
    },
    userInfo: {
        paddingTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    textSection: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 5,
        paddingLeft: 0,
        marginLeft: -10,
        width: 220,
        // backgroundColor: 'blue'
        
    },
    userName: {
        justifyContent: 'flex-start',
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Lato-Regular',
        color: 'rgba(0, 0, 0, 0.75)'
    },
    userImg: {
        width: 55,
        height: 55,
        borderRadius: 25,
        
    },
    pointCustom: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Lato-Regular',
        color: 'rgba(0, 0, 0, 0.8)'
    }

});
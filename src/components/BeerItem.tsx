import React from 'react'
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';

export const BeerItem = () => {
  return (
    <TouchableOpacity
        activeOpacity={0.85}
        style={styles.card}

    >
        <Text>BeerItem</Text>
    </TouchableOpacity>
  )
}




const styles = StyleSheet.create({

    card: {
        width: 190,
        height: 200,
        marginBottom: 10,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        
    }

})
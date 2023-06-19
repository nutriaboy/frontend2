import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Item = () => {
    return (
        <View style={styles.container}>
            <View style={styles.sectionDate}>
                <Text>Fecha </Text>
            </View>

        <View style={styles.sectionInfo}>
            <Text>xddxdx xddddxdxdxdxd xdxddx</Text>
        </View>
        


        </View>
    )
}



export const styles = StyleSheet.create({

    container: {
        width: '90%',
        minHeight: 180,//TODO: ver segun items que vengan
        margin: 5,
        // padding: 5,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    sectionDate:{
        paddingLeft: 20,
        height: 45,
        justifyContent: 'center',
        // backgroundColor: 'red',
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(0, 0, 0,0.1)',
    },
    sectionInfo:{
        backgroundColor: 'rgba(250, 0, 0,0.1)',
        height: 126,
        marginBottom: 7,
        paddingTop: 5,
        paddingLeft: 10,
    },


})
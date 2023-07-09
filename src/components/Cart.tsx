import React, { useEffect, useState, useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { BeerCartContext } from '../context/BeerCartContext';


// const uri = 'https://cdnx.jumpseller.com/dc-central-distribuidora-de-licores/image/15971909/resize/540/540?1646949528'


export const Cart = ({ data }: any) => {
    const { updateAmountBeerWarehouse, deleteBeerWarehouse } = useContext(BeerCartContext);
    const [amountBuy, setAmountBuy] = useState(data.cantidad);


    useEffect(() => {
        setAmountBuy(data.cantidad);
    }, [data])


    const addAmount = () => {

        if (amountBuy < data.stock) {
            setAmountBuy(amountBuy + 1);
            updateAmountBeerWarehouse(amountBuy + 1, data.id);
        }
    }

    const restAmount = () => {
        if (amountBuy > 1) {
            setAmountBuy(amountBuy - 1)
            updateAmountBeerWarehouse(amountBuy - 1, data.id);
        }
    }

    const deleteAmount = () => {
        deleteBeerWarehouse(data.id);
    }

    const formatoChileno = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' });
    return (
        <View
            style={styles.card}
        >
            <View style={styles.userInfo}>
                <Image
                    style={styles.userImg}
                    source={require('../assets/cerveza.jpg')}
                />
                <View style={styles.textSection}>
                    <Text style={styles.userName}>{data.nombre}</Text>

                    <Text style={styles.userName}>{data.marca}</Text>
                    <Text style={styles.userName}>{formatoChileno.format(data.precioUnit * data.cantidad)}</Text>

                </View>
            </View>

            <View
                style={styles.containerButton}
            >

                <View style={{ flexDirection: 'row', marginBottom: 10, backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 10, }}>
                    {
                        (amountBuy !== 1)
                            ? (
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={styles.buttonsStocking}
                                    onPress={restAmount}
                                >
                                    <Text style={styles.buttonText}>
                                        -
                                    </Text>
                                </TouchableOpacity>
                            )
                            : (
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={styles.buttonsStocking}
                                    onPress={deleteAmount}
                                >
                                    <Icon name="trash" size={20} />
                                </TouchableOpacity>
                            )
                    }

                    <Text style={{ ...styles.buttonText, paddingLeft: 10, paddingRight: 10, fontSize: 15 }}>
                        {amountBuy}
                    </Text>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.buttonsStocking}
                        onPress={addAmount}
                    >
                        <Text style={styles.buttonText}>
                            +
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>

            {/* <View style={{ right: 20}}>
                {/* chevron-forward-sharp */}
            {/* <Icon 
                    name={ 'chevron-forward-sharp' }
                    color="rgba(66, 66, 66, 0.7)"
                    size={ 25 }
                    style={{ top: '30%', position:'absolute'}}
                />  */}

            {/* </View> */}

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
        // backgroundColor: 'red',
        paddingStart: 10,
        width: '75%',
        paddingTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textSection: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 5,
        paddingLeft: 0,
        marginLeft: 10,
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
    },
    containerButton: {
        position: 'absolute',
        right: 5,
        justifyContent: 'center',
        // backgroundColor: 'red',
        alignItems: 'center',
        marginTop: 20,
        height: 30,
        // width: '100%',
    },
    // button: {
    //     backgroundColor: 'white',
    //     width: 330,
    //     height: 50,
    //     borderRadius: 10,
    //     alignItems: 'center',
    //     justifyContent: 'center',

    // },
    buttonText: {
        fontSize: 18,
        color: '#1c1c1c',
        fontWeight: 'bold',
        alignSelf: 'center',

    },
    buttonsStocking: {
        backgroundColor: 'white',
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }

});
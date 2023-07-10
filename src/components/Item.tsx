import React from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

const uri = 'https://chambriao.cl/wp-content/uploads/2021/08/Cruz-de-Malta-GOLDEN-ALE-1.jpg'


export const Item = ({ data }: any) => {
    const formatoChileno = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' });
    const fecha = new Date(data.createdAt);
    const dia = fecha.getDate();
    const mes = fecha.getMonth();
    const year = fecha.getFullYear();
    const nombresMeses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];


    return (
        <View style={styles.container}>
            <View style={styles.sectionDate}>
                <Text style={styles.dateInfo} >{dia} de {nombresMeses[mes]} {year}</Text>
            </View>

            {/* <View style={styles.transparencia}>
        </View> */}


            <FlatList
                data={data.detalle}
                renderItem={({ item }) => (
                    <View style={styles.sectionInfo}>
                        <View style={styles.imgView}>
                            <Image
                                style={styles.userImg}
                                source={{ uri }}
                            />
                        </View>
                        <View style={styles.infoView}>
                            <Text>Cerveza: {item.cerveza.nombre}</Text>
                            <Text>Marca: {item.cerveza.marca}</Text>
                            <Text>Valor: {formatoChileno.format(item.precio)}</Text>
                            <Text>Cantidad: {item.cantidad}</Text>

                        </View>
                    </View>)
                }
            />




        </View>
    )
}



export const styles = StyleSheet.create({

    container: {
        width: '90%',
        minHeight: 180,
        margin: 5,
        // padding: 5,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    sectionDate: {
        paddingLeft: 20,
        height: 45,
        justifyContent: 'center',
        // backgroundColor: 'red',
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(0, 0, 0,0.1)',
    },
    sectionInfo: {
        // backgroundColor: 'rgba(250, 0, 0,0.1)',
        height: 126,
        marginBottom: 7,
        paddingTop: 5,
        paddingLeft: 10,
        flexDirection: 'row',
    },
    imgView: {
        width: '30%',
        height: '100%',
        // backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userImg: {
        marginTop: -15,
        width: 85,
        height: 80,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0.1)'
    },
    infoView: {
        // backgroundColor: 'green',
        width: '70%',
        padding: 10,
    },
    dateInfo: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    transparencia: {
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%',
        zIndex: 9,
        position: 'absolute'
    },


})
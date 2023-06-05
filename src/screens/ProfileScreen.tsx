import React, { useState, useContext, useEffect } from 'react'
import { View, Text, Platform, TouchableOpacity, TextInput, Modal, Pressable, StyleSheet } from 'react-native';
import { loginStyles } from '../theme/loginStyles';
import { AuthContext } from '../context/AuthContext';


export const ProfileScreen = () => {
    const { user } = useContext(AuthContext);
    const [dataUser, setDataUser] = useState({
        nombre: user?.nombre,
        apellido: user?.apellido,
        correo: user?.correo,
        rut: user?.rut
    });
    const { nombre, apellido, correo, rut } = dataUser;
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
      if (isVisible) {
        setDataUser({
          nombre: user?.nombre,
          apellido: user?.apellido,
          correo: user?.correo,
          rut: user?.rut
        });
    }
    }, [isVisible])
    

    const onChange = ( value: string, field: any ) => {
        setDataUser({
            ...dataUser,
            [field]: value
        });
    }


    const onPress = () => {
        
        setIsVisible(true);
    };


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View
                style={{ ...loginStyles.formContainer, justifyContent: 'center', }}
            >
                <Text style={{ ...loginStyles.title, color: 'black' }}>
                    Datos del Usuario
                </Text>

                {/*Input telefono 119,100,227*/}
                <Text style={{ ...loginStyles.label, color: 'rgb(119,100,227)' }}>Nombre: </Text>
                <TextInput
                    placeholder='Nombre'
                    placeholderTextColor="rgba(119,100,227,0.4)"
                    underlineColorAndroid='rgb(119,100,227)'
                    editable={false}
                    style={[
                        loginStyles.inputField, { color: "rgb(119,100,227)" },
                        (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                    ]}
                    selectionColor="white"
                    value={user?.nombre ?? ''}
                    autoCapitalize='words'
                    autoCorrect={false}
                />
                <Text style={{ ...loginStyles.label, color: 'rgb(119,100,227)' }}>Apellido: </Text>
                <TextInput
                    placeholder='Apellido'
                    placeholderTextColor="rgba(119,100,227,0.4)"
                    underlineColorAndroid='rgb(119,100,227)'
                    editable={false}
                    style={[
                        loginStyles.inputField, { color: "rgb(119,100,227)" },
                        (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                    ]}
                    selectionColor="white"
                    value={user?.apellido}
                    autoCapitalize='words'
                    autoCorrect={false}
                />
                <Text style={{ ...loginStyles.label, color: 'rgb(119,100,227)' }}>Correo: </Text>
                <TextInput
                    placeholder='Correo'
                    placeholderTextColor="rgba(119,100,227,0.4)"
                    underlineColorAndroid='rgb(119,100,227)'
                    editable={false}
                    style={[
                        loginStyles.inputField, { color: "rgb(119,100,227)" },
                        (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                    ]}
                    selectionColor="white"
                    value={user?.correo}
                    autoCapitalize='words'
                    autoCorrect={false}
                />
                <Text style={{ ...loginStyles.label, color: 'rgb(119,100,227)' }}>Rut: </Text>
                <TextInput
                    placeholder='Rut'
                    placeholderTextColor="rgba(119,100,227,0.4)"
                    underlineColorAndroid='rgb(119,100,227)'
                    editable={false}
                    style={[
                        loginStyles.inputField, { color: "rgb(119,100,227)" },
                        (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                    ]}
                    selectionColor="white"
                    value={user?.rut}
                    autoCapitalize='words'
                    autoCorrect={false}
                />

                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={onPress}
                    style={{ ...loginStyles.button, borderRadius: 5, marginTop: 35, backgroundColor: "rgb(119,100,227)", borderColor: "rgb(119,100,227)" }}
                >
                    <Text style={{ ...loginStyles.buttonText, alignSelf: 'center', color: 'white' }}>Editar Perfil</Text>
                </TouchableOpacity>
            </View>

            {/*-----------Modal Inicio----------*/}
            <Modal
                animationType='fade'
                visible={isVisible}
                transparent={true}
            >
                <View style={styles.containerModal}>
                    <View style={styles.modalScreen}>

                        <View style={styles.sectionTitle}>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                marginLeft: 20,
                                color: 'black'
                            }}> Editar Datos</Text>
                        </View>

                        <View style={{ ...styles.form, bottom: 25 }}>
                            <Text style={styles.label}>Nombre:</Text>
                            <TextInput
                                placeholder='Ingresar Nombre'
                                placeholderTextColor="rgba(0,0,0,0.4)"
                                style={styles.inputField}
                                selectionColor="black"
                                onChangeText={(value) => onChange(value, 'nombre')}
                                value={nombre}
                                // onSubmitEditing={  }
                                autoCapitalize='none'
                                autoCorrect={false}
                            />
                        </View>
                        <View style={{ ...styles.form, bottom: 25 }}>
                            <Text style={styles.label}>Apellido:</Text>
                            <TextInput
                                placeholder='Ingresar Apellido'
                                placeholderTextColor="rgba(0,0,0,0.4)"
                                style={styles.inputField}
                                selectionColor="black"
                                onChangeText={(value) => onChange(value, 'apellido')}
                                value={apellido}
                                // onSubmitEditing={  }
                                autoCapitalize='none'
                                autoCorrect={false}
                            />
                        </View>
                        <View style={{ ...styles.form, bottom: 25 }}>
                            <Text style={styles.label}>Correo:</Text>
                            <TextInput
                                placeholder='Ingresar Correo'
                                placeholderTextColor="rgba(0,0,0,0.4)"
                                style={styles.inputField}
                                selectionColor="black"
                                onChangeText={(value) => onChange(value, 'correo')}
                                value={correo}
                                // onSubmitEditing={  }
                                autoCapitalize='none'
                                autoCorrect={false}
                            />
                        </View>
                        <View style={{ ...styles.form, bottom: 25 }}>
                            <Text style={styles.label}>Rut:</Text>
                            <TextInput
                                placeholder='Ingresar Rut'
                                placeholderTextColor="rgba(0,0,0,0.4)"
                                style={styles.inputField}
                                selectionColor="black"
                                onChangeText={(value) => onChange(value, 'rut')}
                                value={rut}
                                // onSubmitEditing={  }
                                autoCapitalize='none'
                                autoCorrect={false}
                            />
                        </View>


                        <View style={styles.sectionBtn}>

                            <Pressable
                                onPress={() => { setIsVisible(!isVisible) }}

                                style={{ ...styles.blackButton, marginBottom: 10, alignSelf: 'center' }}
                            >
                                <Text style={styles.buttonText}>Guardar Cambios</Text>
                            </Pressable>

                            <Pressable
                                onPress={() => {
                                    setIsVisible(!isVisible);
                                }}
                                style={{ marginBottom: 15 }}
                            >
                                <Text style={{ ...styles.buttonTextModal, alignSelf: 'center' }}>Cancelar</Text>
                            </Pressable>
                        </View>


                    </View>

                </View>
            </Modal>
            {/*-----------Modal Fin----------*/}
        </View>
    )
}



const styles = StyleSheet.create({

    containerModal: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        paddingTop: 40,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    modalScreen: {
        width: 375,
        height: 550,
        backgroundColor: 'white',
        justifyContent: 'center',
        // alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        elevation: 10,
        borderRadius: 10
    },
    sectionTitle: {
        position: 'absolute',
        justifyContent: 'center',
        top: 0,
        height: 65,
        width: '100%',
        borderBottomColor: 'rgba(0, 0, 0, 0.2)',
        borderBottomWidth: 1,
    },
    sectionBtn: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        // backgroundColor:'red'
    },
    buttonTextModal: {
        color: '#5856D6',
        fontSize: 18,
        // fontWeight: '400'

    },
    blackButton: {
        height: 45,
        width: 200,
        backgroundColor: '#1c1c1c',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        elevation: 6
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    },
    label: {
        marginTop: 25,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
      },
      inputField: {
        color: 'black',
        fontSize: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        paddingBottom: 4,
        marginBottom: 10
      },
      form: {
        marginLeft: 20,
        marginRight: 20,
      },
})
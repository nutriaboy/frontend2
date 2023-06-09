import React, { useState, useContext } from 'react'
import { View, Text, Platform, TextInput, Pressable, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { loginStyles } from '../theme/loginStyles';
import { StackScreenProps } from '@react-navigation/stack';
import { useForm } from '../hooks/useFrome';
import { AuthContext } from '../context/AuthContext';
import { SubContext } from '../context/SubContext';
import { Box, CheckIcon, Select } from 'native-base';

interface Props extends StackScreenProps<any, any> { };

//TODO: Crear alertas de errores
export const SubscriptionScreen = ({ navigation }: Props) => {

    const { user } = useContext(AuthContext);
    const { createSub } = useContext(SubContext);

    const { telefono, ciudad, direccion, onChange } = useForm({
        telefono: user?.telefono || '',
        ciudad: user?.ciudad || '',
        direccion: user?.direccion || '',
        // genero: user?.genero || ''
    });
    const [isVisible, setIsVisible] = useState(false);

    const [genderOption, setGenderOption] = useState({genero: user?.genero || ''});
    const {genero}  = genderOption;




    const PayAndSub = () => {
        const id = user!.uid;
        createSub({ id, telefono, ciudad, direccion, genero });
        setIsVisible(!isVisible);
        navigation.pop()
    }


    const todoOk = () => {
        return (telefono.length > 1 && ciudad.length > 1 && direccion.length > 1 && genero !== '') ? true : false;
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#7764E3' }}>

            <View
                style={{ ...loginStyles.formContainer, justifyContent: 'center', }}
            >
                <Text style={{ ...loginStyles.title, marginLeft: 15 }}>
                    Suscripción
                </Text>

                {/*Input telefono*/}
                <Text style={loginStyles.label}>Teléfono: </Text>
                <TextInput
                    placeholder='Ingrese su Teléfono'
                    placeholderTextColor="rgba(255,255,255,0.4)"
                    underlineColorAndroid='white'
                    style={[
                        loginStyles.inputField,
                        (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                    ]}
                    selectionColor="white"
                    onChangeText={(value) => onChange(value, 'telefono')}
                    value={telefono}
                    // onSubmitEditing={ onRegister }
                    autoCapitalize='words'
                    autoCorrect={false}
                />

                {/*Input ciudad*/}
                <Text style={loginStyles.label}>Ciudad: </Text>
                <TextInput
                    placeholder='Ingrese su Ciudad'
                    placeholderTextColor="rgba(255,255,255,0.4)"
                    underlineColorAndroid='white'
                    style={[
                        loginStyles.inputField,
                        (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                    ]}
                    selectionColor="white"
                    onChangeText={(value) => onChange(value, 'ciudad')}
                    value={ciudad}
                    // onSubmitEditing={ onRegister }
                    autoCapitalize='words'
                    autoCorrect={false}
                />

                {/*Input direccion*/}
                <Text style={loginStyles.label}>Dirección: </Text>
                <TextInput
                    placeholder='Ingrese su Dirección'
                    placeholderTextColor="rgba(255,255,255,0.4)"
                    underlineColorAndroid='white'
                    style={[
                        loginStyles.inputField,
                        (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                    ]}
                    selectionColor="white"
                    onChangeText={(value) => onChange(value, 'direccion')}
                    value={direccion}
                    // onSubmitEditing={ onRegister }
                    autoCapitalize='words'
                    autoCorrect={false}
                />

                {/*Input genero*/}
                <Text style={{...loginStyles.label, marginBottom: 7}}>Genero: </Text>
                {/* <TextInput
                    placeholder='Ingrese su Genero'
                    placeholderTextColor="rgba(255,255,255,0.4)"
                    underlineColorAndroid='white'
                    style={[
                        loginStyles.inputField,
                        (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                    ]}
                    selectionColor="white"
                    onChangeText={(value) => onChange(value, 'genero')}
                    value={genero}
                    // onSubmitEditing={ onRegister }
                    autoCapitalize='words'
                    autoCorrect={false}
                /> */}



                <Box
                    w="3/4"
                    maxW="600"
                >
                    <Select
                        selectedValue={genero}
                        bgColor='violet.50'
                        minWidth="300"
                        accessibilityLabel="Elija su Genero"
                        fontSize="lg"
                        placeholder="Elija su Genero"
                        _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size="5" />
                        }}
                        mt={1}
                        onValueChange={itemValue => setGenderOption({ genero: itemValue })}
                    >

                        <Select.Item
                            label={"Masculino"}
                            value={"M"}
                        />
                        <Select.Item
                            label={"Femenino"}
                            value={"F"}
                        />

                    </Select>
                </Box>



                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => setIsVisible(!isVisible)}
                    style={
                        (todoOk()) ?
                            { ...loginStyles.button, borderRadius: 5, marginTop: 20, backgroundColor: "#C32BF0", borderColor: "#C32BF0" }
                            : { ...loginStyles.button, borderRadius: 5, marginTop: 20, backgroundColor: "#D594EF", borderColor: "#D594EF" }
                    }
                    disabled={!todoOk()}
                >
                    <Text style={{ ...loginStyles.buttonText, alignSelf: 'center', color: 'white' }}>Suscribir</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.pop()}
                    style={{ ...loginStyles.button, borderRadius: 5, marginTop: 20, backgroundColor: "#BDB3F2", borderColor: "#BDB3F2" }}
                >
                    <Text style={{ ...loginStyles.buttonText, alignSelf: 'center', color: '#4D4A63' }}>Volver</Text>
                </TouchableOpacity>


                {/*-----------Modal Inicio----------*/}
                <Modal
                    animationType='fade'
                    visible={isVisible}
                    transparent={true}
                >
                    <View style={stylesSub.containerModal}>
                        <View style={stylesSub.modalScreen}>

                            <View style={stylesSub.sectionTitle}>
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    marginLeft: 20,
                                    color: 'black'
                                }}> WebPay</Text>
                            </View>

                            <View style={stylesSub.sectionBtn}>

                                <Pressable
                                    onPress={PayAndSub}

                                    style={{ ...stylesSub.blackButton, marginBottom: 10, alignSelf: 'center' }}
                                >
                                    <Text style={stylesSub.buttonText}>Pagar</Text>
                                </Pressable>

                                <Pressable
                                    onPress={() => {
                                        setIsVisible(!isVisible);
                                    }}
                                    style={{ marginBottom: 15 }}
                                >
                                    <Text style={{ ...stylesSub.buttonTextModal, alignSelf: 'center' }}>Cancelar</Text>
                                </Pressable>
                            </View>


                        </View>

                    </View>
                </Modal>
                {/*-----------Modal Fin----------*/}



            </View>
        </View>
    )
}


export const stylesSub = StyleSheet.create({

    containerModal: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalScreen: {
        width: 350,
        height: 300,
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
})
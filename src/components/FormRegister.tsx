import React, { useContext, useState } from 'react'
import { View, Text, TextInput, Platform, TouchableOpacity } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';

import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hooks/useFrome';
import { loginStyles } from '../theme/loginStyles';

export const FormRegister = () => {

    const { singUp } = useContext(AuthContext)
    const [formPartition, setFormPartition] = useState(true);
    const navigator = useNavigation();
    const {
        nombre,
        apellido,
        correo,
        rut,
        password,
        onChange
    } = useForm({
        nombre: '',
        apellido: '',
        correo: '',
        rut: '',
        password: '',
    });

    const handleButtonNext = () => {
        if (formPartition) {
            return setFormPartition(false);
        }

        singUp({ nombre, apellido, correo, rut, password });
        // navigator.dispatch(
        //     CommonActions.navigate({
        //         name: 'LoginScreen',
        //     })
        // )
    }
    const handleReturn = () => {
        navigator.dispatch(
            CommonActions.navigate({
                name: 'LoginScreen',
            })
        )
    }


    const todoOk = () => {

        return (nombre.length > 1 && apellido.length > 1 && correo.length > 1 && rut.length > 1 && password.length > 1) ? true : false;


    }


    return (
        <>

            <Text style={loginStyles.label}>Nombre: </Text>
            <TextInput
                placeholder='Ingrese su Nombre'
                placeholderTextColor="rgba(255,255,255,0.4)"
                underlineColorAndroid='white'
                style={[
                    loginStyles.inputField,
                    (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                ]}
                selectionColor="white"
                onChangeText={(value) => onChange(value, 'nombre')}
                value={nombre}
                // onSubmitEditing={ onRegister }
                autoCapitalize='words'
                autoCorrect={false}
            />

            {/*Input apellido*/}
            <Text style={loginStyles.label}>Apellido: </Text>
            <TextInput
                placeholder='Ingrese su Apellido'
                placeholderTextColor="rgba(255,255,255,0.4)"
                underlineColorAndroid='white'
                style={[
                    loginStyles.inputField,
                    (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                ]}
                selectionColor="white"
                onChangeText={(value) => onChange(value, 'apellido')}
                value={apellido}
                // onSubmitEditing={ onRegister }
                autoCapitalize='words'
                autoCorrect={false}
            />

            {/*Input Correo*/}
            <Text style={loginStyles.label}>Correo: </Text>
            <TextInput
                placeholder='Ingrese su Correo'
                placeholderTextColor="rgba(255,255,255,0.4)"
                keyboardType='email-address'
                underlineColorAndroid='white'
                style={[
                    loginStyles.inputField,
                    (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                ]}
                selectionColor="white"
                onChangeText={(value) => onChange(value, 'correo')}
                value={correo}
                // onSubmitEditing={ onRegister }
                autoCapitalize='none'
                autoCorrect={false}
            />

            {/*Input rut*/}
            <Text style={loginStyles.label}>Rut: </Text>
            <TextInput
                placeholder='Ingrese su Rut'
                placeholderTextColor="rgba(255,255,255,0.4)"
                underlineColorAndroid='white'
                style={[
                    loginStyles.inputField,
                    (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                ]}
                selectionColor="white"
                onChangeText={(value) => onChange(value, 'rut')}
                value={rut}
                // onSubmitEditing={ onRegister }
                autoCapitalize='words'
                autoCorrect={false}
            />

            {/* Input Password */}
            <Text style={loginStyles.label}>Contraseña:</Text>
            <TextInput
                placeholder='******'
                placeholderTextColor="rgba(255,255,255,0.4)"
                secureTextEntry={true}
                underlineColorAndroid="white"
                style={[
                    loginStyles.inputField,
                    (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                ]}
                selectionColor="white"

                onChangeText={(value) => onChange(value, 'password')}
                value={password}
                // onSubmitEditing={ onLogin }

                autoCapitalize='none'
                autoCorrect={false}
            />



            {/* Buttons */}
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleButtonNext}
                disabled={!todoOk()}
                style={
                    (!todoOk())
                        ? { ...loginStyles.buttonNext, marginTop: 20, borderColor: '#BDBDBD' }
                        : { ...loginStyles.buttonNext, marginTop: 20 }
                }
            >
                <Text style={
                    (!todoOk())
                        ? { ...loginStyles.buttonText, color: '#BDBDBD' }
                        : { ...loginStyles.buttonText }
                }
                >Registrar
                </Text>
            </TouchableOpacity>


            <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleReturn}
                style={{ ...loginStyles.buttonNext, marginTop: 10 }}
            >
                <Text style={loginStyles.buttonText}>Volver</Text>
            </TouchableOpacity>

        </>
    )
}

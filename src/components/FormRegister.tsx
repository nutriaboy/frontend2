import React, { useState } from 'react'
import { View, Text, TextInput, Platform, ScrollView } from 'react-native';
import { loginStyles } from '../theme/loginStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useForm } from '../hooks/useFrome';
import { CommonActions, useNavigation } from '@react-navigation/native';

export const FormRegister = () => {

    const [formPartition, setFormPartition] = useState(true);
    const navigator = useNavigation();
    const {
        nombre,
        apellido,
        correo,
        rut,
        password,
        telefono,
        direccion,
        genero,
        onChange
    } = useForm({
        nombre: '',
        apellido: '',
        correo: '',
        rut: '',
        password: '',
        telefono: '',
        direccion: '',
        genero: '',
    });

    const handleButtonNext = () => {
        if (formPartition) {
            return setFormPartition(false);
        }

        console.log({
            nombre,
            apellido,
            correo,
            rut,
            password,
            telefono,
            direccion,
            genero,
        });
        navigator.dispatch(
            CommonActions.navigate({
                name: 'LoginScreen',
            })
        )
    }
    const handleReturn = () => {
        navigator.dispatch(
            CommonActions.navigate({
                name: 'LoginScreen',
            })
        )
    }


    const todoOk = () => {
        if (formPartition) {
            return (nombre.length > 1 && apellido.length > 1 && correo.length > 1 && rut.length > 1) ? true : false;
        }
        return (password.length > 1 && telefono.length > 1 && direccion.length > 1 && genero.length > 1) ? true : false;
    }


    return (
        <>
            {
                (formPartition) ? (
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
                            autoCapitalize='words'
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
                    </>
                )
                    : (
                        <>
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

                            {/*Input Telefono*/}
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

                            {/*Input Dirección*/}
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

                            {/*Input Genero*/}
                            <Text style={loginStyles.label}>Genero: </Text>
                            <TextInput
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
                            />
                        </>
                    )
            }

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

                {
                    formPartition ?
                        (
                            <>
                                <Text style={
                                    (!todoOk())
                                        ? { ...loginStyles.buttonText, color: '#BDBDBD' }
                                        : { ...loginStyles.buttonText }
                                }
                                >
                                    Siguiente
                                </Text>
                            </>
                        )
                        : (
                            <Text style={
                                (!todoOk())
                                    ? { ...loginStyles.buttonText, color: '#BDBDBD' }
                                    : { ...loginStyles.buttonText }
                            }
                            >Registrar
                            </Text>
                        )
                }

            </TouchableOpacity>

            {
                (!formPartition) ? (
                    <>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => setFormPartition(true)}
                            style={{ ...loginStyles.buttonNext, marginTop: 10 }}
                        >
                            <Text style={loginStyles.buttonText}>Volver</Text>
                        </TouchableOpacity>


                    </>)
                    : (<>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={handleReturn}
                            style={{ ...loginStyles.buttonNext, marginTop: 10 }}
                        >
                            <Text style={loginStyles.buttonText}>Volver</Text>
                        </TouchableOpacity>


                    </>)

            }



        </>
    )
}

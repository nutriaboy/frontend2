import React, {useState,useContext} from 'react'
import { View, Text, Platform, TouchableOpacity, TextInput } from 'react-native';
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
                        loginStyles.inputField, {color : "rgb(119,100,227)"},
                        (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                    ]}
                    selectionColor="white"
                    // onChangeText={(value) => onChange(value, 'nombre')}
                    value={nombre}
                    // onSubmitEditing={ onRegister }
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
                        loginStyles.inputField, {color : "rgb(119,100,227)"},
                        (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                    ]}
                    selectionColor="white"
                    // onChangeText={(value) => onChange(value, 'apellido')}
                    value={apellido}
                    // onSubmitEditing={ onRegister }
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
                        loginStyles.inputField, {color : "rgb(119,100,227)"},
                        (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                    ]}
                    selectionColor="white"
                    // onChangeText={(value) => onChange(value, 'correo')}
                    value={correo}
                    // onSubmitEditing={ onRegister }
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
                        loginStyles.inputField, {color : "rgb(119,100,227)"},
                        (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                    ]}
                    selectionColor="white"
                    // onChangeText={(value) => onChange(value, 'rut')}
                    value={rut}
                    // onSubmitEditing={ onRegister }
                    autoCapitalize='words'
                    autoCorrect={false}
                />

                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => console.log('first')}
                    style={{ ...loginStyles.button, borderRadius: 5, marginTop: 35, backgroundColor: "rgb(119,100,227)", borderColor: "rgb(119,100,227)" }}
                >
                    <Text style={{ ...loginStyles.buttonText, alignSelf: 'center', color: 'white' }}>Editar Perfil</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

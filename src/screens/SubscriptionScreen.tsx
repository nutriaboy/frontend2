import React  from 'react'
import { View, Text, Platform, TextInput, Button, TouchableOpacity } from 'react-native';
import { loginStyles } from '../theme/loginStyles';
import { StackScreenProps } from '@react-navigation/stack';
import { useForm } from '../hooks/useFrome';

interface Props extends StackScreenProps<any, any> { };

export const SubscriptionScreen = ({ navigation }: Props) => {

    const { telefono, ciudad, direccion, genero, onChange } = useForm({
        telefono: '',
        ciudad: '',
        direccion: '',
        genero: ''
    });

    const onPress = () => {

        console.log({telefono, ciudad, direccion, genero});
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
                <Text style={loginStyles.label}>Direccion: </Text>
                <TextInput
                    placeholder='Ingrese su Direccion'
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

                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={onPress}
                    style={{ ...loginStyles.button, borderRadius: 5, marginTop: 20, backgroundColor: "#C32BF0", borderColor: "#C32BF0" }}
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



                {/* <Button
                    title='Volver'
                /> */}
            </View>
        </View>
    )
}

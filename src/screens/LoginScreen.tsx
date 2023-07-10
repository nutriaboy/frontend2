import React, {useContext, useEffect} from 'react'
import { View, Text, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native';
import { Background } from '../components/Background';
import { loginStyles } from '../theme/loginStyles';
import { Logo } from '../components/Logo';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hooks/useFrome';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({navigation}: Props) => {

  const { singIn, errorMessage, removeError} = useContext(AuthContext);

  const { correo, password, onChange} = useForm({
    correo: '',
    password: ''
  });

  useEffect(() => {
    if (errorMessage.length === 0) return;

    Alert.alert('Login Incorrecto', errorMessage, [{
      text: 'OK',
      onPress: () => removeError()
    }] );

  }, [errorMessage]);


  const onLogin = () => {
    Keyboard.dismiss();
    singIn({correo, password});
  }

  return (
    <>
    {/* #AC51B3  */}
      <Background backgroundColor={'#7764E3'}/> 
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
      >
        <View style={loginStyles.formContainer}>
          <Logo />
          <Text style={loginStyles.title}>Login</Text>

          {/* Input Email*/}
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
            onChangeText={ (value) => onChange(value, 'correo')}
            value={correo}
            onSubmitEditing={ onLogin }
            autoCapitalize='none'
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

            onChangeText={ (value) => onChange(value, 'password')}
            value={ password }
            onSubmitEditing={ onLogin }

            autoCapitalize='none'
            autoCorrect={false}
          />

          {/* Boton Login */}
          <View style={ loginStyles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={ 0.8 }
              style={ loginStyles.button }
              onPress={ onLogin }
            >
              <Text style={loginStyles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>

          {/* Crear una nueva cuenta */}
          <View style= { loginStyles.newUserContainer}>
            <TouchableOpacity
              activeOpacity={ 0.8 }
              onPress={() => navigation.navigate('RegisterScreen')}>

                <Text style={loginStyles.buttonText}>Nueva Cuenta</Text>

              </TouchableOpacity>

          </View>




        </View>
      </KeyboardAvoidingView>

    </>
  )
}

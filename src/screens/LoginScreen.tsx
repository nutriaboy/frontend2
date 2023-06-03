import React from 'react'
import { View, Text, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native';
import { Background } from '../components/Background';
import { loginStyles } from '../theme/loginStyles';
import { Logo } from '../components/Logo';

export const LoginScreen = () => {
  return (
    <>
      <Background />
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
            // onChangeText={ (value) => onChange(value, 'email')}
            // value={correo}
            // onSubmitEditing={ onLogin }
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

            // onChangeText={ (value) => onChange(value, 'password')}
            // value={ password }
            // onSubmitEditing={ onLogin }

            autoCapitalize='none'
            autoCorrect={false}
          />

          {/* Boton Login */}
          <View style={ loginStyles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={ 0.8 }
              style={ loginStyles.button }
              // onPress={ onLogin }
            >
              <Text style={loginStyles.buttonText}>Login</Text>
            </TouchableOpacity>

          </View>




        </View>
      </KeyboardAvoidingView>

    </>
  )
}

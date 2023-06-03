import React from 'react'
import { View, Text, TextInput, Platform, ScrollView } from 'react-native';
import { loginStyles } from '../theme/loginStyles';

export const RegisterScreen = () => {
  return (
    <>
    
      <View 
        style={{ flex: 1, backgroundColor: '#AC51B3'}}
      >
        <View
          style={{ ...loginStyles.formContainer }}
        >
          <Text style={loginStyles.title}>Registrar</Text>

          {/*Input nombre*/}
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
            // onChangeText={ (value) => onChange(value, 'nombre')}
            // value={nombre}
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
            // onChangeText={ (value) => onChange(value, 'apellido')}
            // value={apellido}
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
            // onChangeText={ (value) => onChange(value, 'nombre')}
            // value={nombre}
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
            // onChangeText={ (value) => onChange(value, 'rut')}
            // value={nombre}
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

            // onChangeText={ (value) => onChange(value, 'password')}
            // value={ password }
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
            // onChangeText={ (value) => onChange(value, 'telefono')}
            // value={telefono}
            // onSubmitEditing={ onRegister }
            autoCapitalize='words'
            autoCorrect={false}
          />

          {/*Input Dirección*/}
          {/* <Text style={loginStyles.label}>Dirección: </Text>
          <TextInput
            placeholder='Ingrese su Dirección'
            placeholderTextColor="rgba(255,255,255,0.4)"
            underlineColorAndroid='white'
            style={[
              loginStyles.inputField,
              (Platform.OS === 'ios') && loginStyles.inputFieldIOS
            ]}
            selectionColor="white"
            // onChangeText={ (value) => onChange(value, 'direccion')}
            // value={direccion}
            // onSubmitEditing={ onRegister }
            autoCapitalize='words'
            autoCorrect={false}
          /> */}

          {/*Input Genero*/}
          {/* <Text style={loginStyles.label}>Genero: </Text>
          <TextInput
            placeholder='Ingrese su Genero'
            placeholderTextColor="rgba(255,255,255,0.4)"
            underlineColorAndroid='white'
            style={[
              loginStyles.inputField,
              (Platform.OS === 'ios') && loginStyles.inputFieldIOS
            ]}
            selectionColor="white"
            // onChangeText={ (value) => onChange(value, 'genero')}
            // value={genero}
            // onSubmitEditing={ onRegister }
            autoCapitalize='words'
            autoCorrect={false}
          /> */}
        </View>
      </View>
    </>
  )
}

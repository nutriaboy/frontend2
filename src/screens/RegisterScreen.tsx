import React from 'react'
import { View, Text, TextInput, Platform, ScrollView } from 'react-native';
import { loginStyles } from '../theme/loginStyles';
import { FormRegister } from '../components/FormRegister';

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
          <FormRegister />
          
        </View>
      </View>
    </>
  )
}

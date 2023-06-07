import React from 'react'
import { Text, View } from 'react-native'
import { loginStyles } from '../theme/loginStyles'

export const ProfileSubScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#7764E3' }}>
            <View
                style={{ ...loginStyles.formContainer, justifyContent: 'center', }}
            >
                <Text style={{ ...loginStyles.title, marginLeft: 15 }}>Bienvenido</Text>

            </View>
        </View>
    )
}

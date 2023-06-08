import React, {useContext} from 'react'
import { Text, View, Alert } from 'react-native'
import { loginStyles } from '../theme/loginStyles'
import {  Button } from 'native-base'
import { AuthContext } from '../context/AuthContext'
import { SubContext } from '../context/SubContext'
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any, any> { };

export const ProfileSubScreen = ({ navigation }: Props) => {
    const {user} = useContext(AuthContext);
    const {subscription, deleteSub} = useContext(SubContext);
    
    const handleDeleteSub = () => { 
        Alert.alert('Eliminar Suscripción', '¿Desea eliminar su suscripción?', [
            {
                text: 'Cancelar',
                onPress: () => null
            },
            {
                text: 'OK',
                onPress: () => (deleteSub(subscription!.idSuscriptor), navigation.pop())
            }]);
        
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#7764E3' }}>
            <View
                style={{ ...loginStyles.formContainer, justifyContent: 'center', }}
            >
                <Text style={{ ...loginStyles.title, marginLeft: 15 }}> {(user?.genero === 'F') ? "Bienvenida: ": "Bienvenido: " } </Text>
                <Text style={{ ...loginStyles.title, marginLeft: 15, marginTop: 0 }}>{user?.nombre} {user?.apellido}</Text>
                <View style={{ position: 'absolute',  bottom: 20, left: 100 }}>
                    <Button size="lg" variant="solid"  colorScheme="secondary" onPress={handleDeleteSub}>
                        ELIMINAR SUSCRIPCIÓN
                    </Button>

                </View>
            </View>
        </View>
    )
}

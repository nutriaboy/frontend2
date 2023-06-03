import React, {useContext} from 'react'
import { View, ActivityIndicator, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export const LoadingScreen = () => {

    const {logOut} = useContext(AuthContext);

    return (

        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <ActivityIndicator
                size={50}
                color="#16161f"
            />
            <View style={{ position: 'absolute' }}>
                <Button 
                    title="Log Out"
                    onPress={logOut}
                />
            </View>

        </View>
    )
}

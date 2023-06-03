import React, {useContext} from 'react'
import { View, Text, StyleSheet,Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export const ProtectedScreen = () => {

  const {user, token, logOut} = useContext(AuthContext);

  return (
    <View style={styles.container}>
        <Text 
        style={styles.instructions}
        >
          { JSON.stringify( user, null, 5 )}
        </Text>
        <Text
          style={styles.instructions}
        >
          { token}
        </Text>
        <Button 
          title="Log Out"
          color="#841584"
          onPress={logOut}
        />
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    color: '#333333',
    fontSize: 15,
    marginBottom: 5,
  },
});
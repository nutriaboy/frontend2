import React, {useState, useContext} from 'react'
import { View, Text, StyleSheet, FlatList, RefreshControl } from 'react-native';
import { Cart } from '../components/Cart'
import { BeerCartContext } from '../context/BeerCartContext';

export const CartScreen = () => {

  const [refreshing, setRefreshing] = useState(false);
  const {beerCart} = useContext(BeerCartContext);

  const onRefresh = () => {
    setRefreshing(true);

    setRefreshing(false);
  }

  return (
    <View style={styles.container}>
        <Text style={styles.titulo} >Carro de Compra</Text>

        <FlatList
          
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              progressViewOffset={40}
            />
          }
          
          data={beerCart}
          // keyExtractor={(item, index) => item.cerveza}
          renderItem={({ item }) => <Cart data={item} />}

        />

        
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  titulo: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemNombre: {
    fontSize: 16,
    flex: 1,
  },
})
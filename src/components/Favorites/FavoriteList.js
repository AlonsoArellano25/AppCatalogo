import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Product from './Product';

export default function FavoriteList(props) {
  const {products, setReloadFavorites} = props;
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Lista de favoritos</Text>
      {products.map(item => (
        <Product
          key={item._id}
          item={item}
          setReloadFavorites={setReloadFavorites}
        />
      ))}
      <View style={{height: 100}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom: 5,
  },
});

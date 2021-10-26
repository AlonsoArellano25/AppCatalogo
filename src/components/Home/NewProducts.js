import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getLasProductsApi} from '../../api/product';
import {MainContext} from '../../context/MainContext';
import ScreenLoading from '../ScreenLoading';
import ListProducts from './ListProducts';

export default function NewProducts() {
  const {addProducts, products} = useContext(MainContext);

  useEffect(() => {
    (async () => {
      const response = await getLasProductsApi(30);
      addProducts(response);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos: </Text>
      {products ? (
        <ListProducts />
      ) : (
        <ScreenLoading text="Cargando productos" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    color: '#000',
  },
});

import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import StatusBarCustom from '../components/StatusBar';
import Search from '../components/Search';
import {useFocusEffect} from '@react-navigation/core';
import {getFavoritesApi} from '../api/favorites';
import ScreenLoading from '../components/ScreenLoading';
import FavoriteList from '../components/Favorites/FavoriteList';

export default function Favorites() {
  const [products, setProducts] = useState(null);
  const [reloadFavorites, setReloadFavorites] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setProducts(null);
      (async () => {
        const response = await getFavoritesApi();
        setProducts(response);
      })();
      setReloadFavorites(false);
    }, [reloadFavorites]),
  );

  return (
    <>
      <StatusBarCustom />
      <Search />
      {!products ? (
        <ScreenLoading text="Cargando lista" />
      ) : products.length === 0 ? (
        <View style={styles.container}>
          <Text style={styles.title}>Lista de favoritos</Text>
          <Text style={styles.text}>
            No tienes productos en tu lista de favoritos
          </Text>
        </View>
      ) : (
        <FavoriteList
          products={products}
          setReloadFavorites={setReloadFavorites}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom: 5,
    color: '#000',
  },
  text: {
    color: '#000',
  },
});

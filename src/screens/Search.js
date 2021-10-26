import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {searchProductsApi} from '../api/serach';
import StatusBarCustom from '../components/StatusBar';
import Search from '../components/Search';
import ScreenLoading from '../components/ScreenLoading';
import ResultNotFound from '../components/Search/ResultNotFound';
import ProductList from '../components/Search/ProductList';

export default function SearchScreen(props) {
  const {route} = props;
  const {params} = route;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      setProducts(null);
      const resp = await searchProductsApi(params.search);
      setProducts(resp);
    })();
  }, [params.search]);

  return (
    <>
      <StatusBarCustom />
      <Search currentSearch={params.search} />
      {!products ? (
        <ScreenLoading text="Buscando productos" />
      ) : products.length === 0 ? (
        <ResultNotFound search={params.search} />
      ) : (
        <ProductList products={products} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#000',
  },
});

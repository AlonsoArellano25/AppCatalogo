import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Linking,
  TouchableWithoutFeedback,
} from 'react-native';
import {getProductApi} from '../api/product';
import StatusBarCustom from '../components/StatusBar';
import Search from '../components/Search';
import ScreenLoading from '../components/ScreenLoading';
import CarouselImage from '../components/Product/CarouselImage';
import {globalStyles} from '../styles/globalStyles';
import Button from '../components/Button';
import {
  addFavoritesApi,
  isFavoriteApi,
  deleteFavoriteApi,
} from '../api/favorites';
import {COLOR_PRINCIPAL_1} from '../styles/colors';
import {Snackbar} from 'react-native-paper';

export default function Product(props) {
  const {route} = props;
  const {params} = route;
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await getProductApi(params.idProduct);
      setProduct(response);

      const arrImages = [response.main_image];
      arrImages.push(...response.images);
      setImages(arrImages);
    })();
  }, [params]);

  useEffect(() => {
    (async () => {
      const response = await isFavoriteApi(product._id);
      if (response.length === 0) {
        setIsFavorite(false);
      } else {
        setIsFavorite(true);
      }
    })();
  }, [product]);

  const openUrl = () => {
    Linking.openURL('https://www.google.com/');
  };

  const addFavorite = async () => {
    if (!isLoading) {
      setIsLoading(true);
      try {
        await addFavoritesApi(product._id);
        setIsFavorite(true);

        setVisible(true);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
  };

  const deleteFaovrite = async () => {
    if (!isLoading) {
      setIsLoading(true);
      try {
        await deleteFavoriteApi(product._id);
        setIsFavorite(false);
        setVisible(true);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
  };

  const onDismissSnackBar = () => setVisible(false);

  return (
    <>
      <StatusBarCustom backgroundColor={'#000'} />
      <Search />
      {!product ? (
        <ScreenLoading text="Cargando producto" size="large" />
      ) : (
        <ScrollView style={styles.container}>
          <Text style={styles.title}>{product.title}</Text>
          <CarouselImage images={images} />
          <View style={styles.containerView}>
            <Text style={styles.subtitle}>
              Precio: <Text style={styles.price}>{product.price}$</Text>
            </Text>
            <Text style={styles.subtitle}>
              Descripción:{' '}
              <Text style={styles.price}>{product.description}</Text>
            </Text>
            <Text style={styles.subtitle}>
              Stock: <Text style={styles.price}>{product.stock}</Text>
            </Text>
            <Text style={styles.subtitle}>
              Categoria: <Text style={styles.price}>{product.tags}</Text>
            </Text>
            <TouchableWithoutFeedback onPress={openUrl}>
              <Text style={globalStyles.underlineText}>Ver más detalles</Text>
            </TouchableWithoutFeedback>
            <Snackbar
              visible={visible}
              onDismiss={onDismissSnackBar}
              duration={2000}
              style={styles.snackbar}>
              <Text style={styles.price}>
                {isFavorite
                  ? 'Se añadio correctamente el producto a favoritos'
                  : 'Se elimino correctamente el producto de favoritos'}
              </Text>
            </Snackbar>
            {isFavorite ? (
              <Button
                text="Eliminar de favoritos"
                style={styles.deleteFavorite}
                onPress={deleteFaovrite}
                isLoading={isLoading}
              />
            ) : (
              <Button
                text="Añadir a favoritos"
                style={styles.addFavorite}
                onPress={addFavorite}
                isLoading={isLoading}
              />
            )}
          </View>
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 50,
  },
  title: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 20,
    marginBottom: 20,
    padding: 10,
  },
  containerView: {
    padding: 10,
  },
  price: {
    color: '#c0c0c0',
  },
  subtitle: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 10,
  },
  url: {
    color: '#000',
  },
  addFavorite: {
    backgroundColor: '#42A5F5',
    width: '100%',
    marginVertical: 20,
  },
  deleteFavorite: {
    backgroundColor: COLOR_PRINCIPAL_1,
    width: '100%',
    marginVertical: 20,
  },
  snackbar: {
    backgroundColor: '#000',
  },
});

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {map} from 'lodash';
import {Button} from 'react-native-paper';
import {COLOR_PRINCIPAL_1} from '../../styles/colors';
import {API_URL} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';

export default function ProductList({products}) {
  console.log(products);
  const navigation = useNavigation();

  const goToProduct = id => {
    navigation.navigate('Product', {idProduct: id});
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>RESULTADOS:</Text>
      {map(products, product => (
        <TouchableWithoutFeedback
          key={product._id}
          onPress={() => goToProduct(product._id)}>
          <View style={styles.product}>
            <View style={styles.containerImage}>
              <Image
                style={styles.image}
                source={{uri: `${API_URL}${product.main_image.url}`}}
              />
            </View>
            <View style={styles.info}>
              <Text style={styles.name} numberOfLines={3} ellipsizeMode="tail">
                {product.title}
              </Text>
              <View style={styles.price}>
                <Text style={styles.price}>Precio: {product.price}$</Text>
              </View>
              <Button style={styles.btn} color={COLOR_PRINCIPAL_1}>
                Ver producto
              </Button>
            </View>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom: 5,
    color: '#000',
    padding: 10,
  },
  product: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#dadde1',
  },
  image: {
    height: '100%',
    resizeMode: 'contain',
  },
  containerImage: {
    width: '40%',
    height: 150,
    backgroundColor: '#ebebeb',
    padding: 5,
  },
  info: {
    padding: 10,
    width: '60%',
    fontSize: 20,
  },
  name: {
    fontSize: 20,
    color: '#000',
  },
  price: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  btn: {
    position: 'absolute',
    bottom: 5,
    left: 0,
    right: 0,
  },
});

import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {API_URL} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {MainContext} from '../../context/MainContext';

export default function ListProducts() {
  const {products} = useContext(MainContext);
  const navigation = useNavigation();

  const handleNextPage = id => {
    navigation.push('Product', {idProduct: id});
  };

  return (
    <View style={styles.container}>
      {products.map(product => (
        <TouchableWithoutFeedback
          key={product._id}
          onPress={() => handleNextPage(product._id)}>
          <View style={styles.containerProduct}>
            <View style={styles.product}>
              <Image
                source={{
                  uri: `${API_URL}${product.main_image.url}`,
                }}
                style={styles.image}
              />
              <Text style={styles.name}>{product.title}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    margin: -3,
  },
  containerProduct: {
    width: '50%',
    padding: 3,
  },
  product: {
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  image: {
    height: 150,
    resizeMode: 'contain',
  },
  name: {
    color: '#000',
    marginTop: 15,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

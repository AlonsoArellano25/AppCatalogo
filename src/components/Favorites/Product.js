import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {Button} from 'react-native-paper';
import {COLOR_PRINCIPAL_1} from '../../styles/colors';
import {API_URL} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {deleteFavoriteApi} from '../../api/favorites';

export default function Product(props) {
  const {item, setReloadFavorites} = props;
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const goProduct = id => {
    navigation.navigate('Product', {idProduct: id});
  };

  const deleteFavorite = async id => {
    Alert.alert(
      'Eliminar producto de favorito',
      '¿Estas seguro de eliminar el producto?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            setLoading(true);
            await deleteFavoriteApi(id);
            setReloadFavorites(true);
            setLoading(false);
          },
        },
        ,
      ],
    );
  };
  return (
    <View style={styles.product}>
      <View style={styles.containerImage}>
        <Image
          source={{uri: `${API_URL}${item.product.main_image.url}`}}
          style={styles.image}
        />
      </View>
      <View style={styles.info}>
        <View>
          <Text style={styles.name}>{item.product.title}</Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.currentPrice}>Precio {item.product.price} $</Text>
        </View>
        <View style={styles.btnsContainer}>
          <Button
            mode="contained"
            color={'#42A5F5'}
            style={{marginBottom: 10}}
            onPress={() => goProduct(item.product._id)}>
            Ver producto
          </Button>
          <Button
            mode="contained"
            color={COLOR_PRINCIPAL_1}
            onPress={() => deleteFavorite(item.product._id)}>
            Eliminar
          </Button>
        </View>
      </View>
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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
    height: 200,
    backgroundColor: '#ebebeb',
    padding: 5,
  },
  info: {
    padding: 10,
    width: '60%',
    justifyContent: 'space-between',
  },
  name: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'flex-end',
  },
  currentPrice: {
    color: '#000',
    fontSize: 16,
  },
  btnsContainer: {
    justifyContent: 'space-between',
    position: 'relative',
    width: '100%',
  },
  loading: {
    backgroundColor: '#000',
    opacity: 0.4,
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 5,
    justifyContent: 'center',
  },
});

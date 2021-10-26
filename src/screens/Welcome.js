import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Button from '../components/Button';
import {COLOR_PRINCIPAL_1} from '../styles/colors';
import {globalStyles} from '../styles/globalStyles';

export default function Welcome({navigation}) {
  const handleNextPage = () => {
    navigation.navigate('TabNavigation');
  };

  return (
    <View style={globalStyles.contain}>
      <Image
        source={require('../assets/images/logocatalogo.png')}
        style={styles.imagelogo}
      />
      <Text style={styles.title}>Bienvenido!</Text>
      <Button isGradient text="Continuar" onPress={handleNextPage} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 100,
  },
  imagelogo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    textAlign: 'center',
    paddingVertical: 35,
    color: COLOR_PRINCIPAL_1,
    fontSize: 35,
    fontWeight: 'bold',
  },
});

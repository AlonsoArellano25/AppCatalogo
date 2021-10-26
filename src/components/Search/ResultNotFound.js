import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function ResultNotFound({search}) {
  return (
    <View style={styles.container}>
      <Text style={styles.searchText}>No hay resultados para {search}</Text>
      <Text style={styles.otherText}>
        Revisa la ortografía o usa terminos más generales
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  otherText: {
    fontSize: 14,
    paddingTop: 5,
    color: '#000',
  },
});

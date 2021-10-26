import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import {COLOR_PRINCIPAL_1, COLOR_PRINCIPAL_2} from '../styles/colors';
import LinearGradient from 'react-native-linear-gradient';

export default function Button(props) {
  const {
    colorButton = COLOR_PRINCIPAL_1,
    colorText = '#fff',
    text,
    onPress,
    style,
    isLoading,
    disabled = false,
    isGradient,
  } = props;

  function onPressHandler() {
    onPress();
  }

  return (
    <TouchableWithoutFeedback onPress={onPressHandler} disabled={disabled}>
      {isGradient ? (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#000', '#fff']}
          style={{
            ...styles.container,
            backgroundColor: disabled ? '#ccc' : colorButton,
            ...style,
          }}>
          {isLoading ? (
            <ActivityIndicator size={20} color="#fff" />
          ) : (
            <Text style={{...styles.text, color: colorText}}>{text}</Text>
          )}
        </LinearGradient>
      ) : (
        <View
          style={{
            ...styles.container,
            backgroundColor: disabled ? '#ccc' : colorButton,
            ...style,
          }}>
          {isLoading ? (
            <ActivityIndicator size={20} color="#fff" />
          ) : (
            <Text style={{...styles.text, color: colorText}}>{text}</Text>
          )}
        </View>
      )}
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    paddingVertical: 15,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});

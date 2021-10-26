import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Keyboard, Animated} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {
  AnimatedIcon,
  animatedTransition,
  animatedTransitionReset,
  arrowAnimation,
  inputAnimation,
  inputAnimationWidth,
} from './SearchAnimation';
import {useNavigation, useRoute} from '@react-navigation/native';
//import {updateSearchHistory} from '../../api/search';

export default function Search({currentSearch}) {
  const [searchQuery, setSearchQuery] = useState(currentSearch || '');
  const [showHistory, setShowHistory] = useState(false);
  const [countainerHeight, setCountainerHeight] = useState(0);
  const navigation = useNavigation();
  const route = useRoute();

  const onChangeSearch = query => setSearchQuery(query);

  const onSearch = async reuseSearch => {
    const isReuse = typeof reuseSearch === 'string';
    closeSearch();
    //!isReuse && (await updateSearchHistory(searchQuery));
    if (route.name === 'search') {
      navigation.navigate('SearchScreen', {
        search: isReuse ? reuseSearch : searchQuery,
      });
    } else {
      navigation.navigate('SearchScreen', {
        search: isReuse ? reuseSearch : searchQuery,
      });
    }
  };

  //Funciones para animar
  const openSearch = () => {
    animatedTransition.start();
    setShowHistory(!showHistory);
  };

  const closeSearch = () => {
    animatedTransitionReset.start();
    Keyboard.dismiss();
    setShowHistory(!showHistory);
  };

  return (
    //El onlayout te devielve el alto que tiene el componente segun el dispositivo
    <View
      style={styles.container}
      onLayout={e => setCountainerHeight(e.nativeEvent.layout.height)}>
      <View style={styles.containerInput}>
        <AnimatedIcon
          name="arrow-left"
          size={20}
          style={[styles.backArrow, arrowAnimation]}
          onPress={closeSearch}
        />
        <Animated.View style={[inputAnimation, {width: inputAnimationWidth}]}>
          <Searchbar
            placeholder="Busca tu producto"
            value={searchQuery}
            onFocus={openSearch}
            onChangeText={onChangeSearch}
            onSubmitEditing={onSearch}
          />
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    zIndex: 1,
  },
  containerInput: {
    position: 'relative',
    alignItems: 'flex-end',
  },
  backArrow: {
    position: 'absolute',
    left: 0,
    top: 15,
    color: '#FFF',
  },
});

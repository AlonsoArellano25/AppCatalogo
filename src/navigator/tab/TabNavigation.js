import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Favorites from '../../screens/Favorites';
import Products from '../../screens/Products';
import {COLOR_BLACK, COLOR_PRINCIPAL_1} from '../../styles/colors';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {backgroundColor: '#000'},
        activeTintColor: '#fff',
        labelStyle: {fontSize: 12},
      }}>
      <Tab.Screen
        name="Products"
        options={{
          title: 'Inicio',
          tabBarIcon: () => (
            <AwesomeIcon name="home" color={'#ccc'} size={25} />
          ),
        }}
        component={Products}
      />
      <Tab.Screen
        name="Favorites"
        options={{
          title: 'Favoritos',
          tabBarIcon: () => (
            <AwesomeIcon name="star" color={'#ccc'} size={25} />
          ),
        }}
        component={Favorites}
      />
    </Tab.Navigator>
  );
}

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../../screens/Welcome';
import TabNavigation from '../tab/TabNavigation';
import Product from '../../screens/Product';
import Search from '../../screens/Search';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="SearchScreen" component={Search} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
    </Stack.Navigator>
  );
}

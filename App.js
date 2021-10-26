import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/navigator/stacks/MainNavigation';
import {MainProvider} from './src/context/MainContext';

const AppState = ({children}) => {
  return <MainProvider>{children}</MainProvider>;
};

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <AppState>
          <MainNavigation />
        </AppState>
      </PaperProvider>
    </NavigationContainer>
  );
}

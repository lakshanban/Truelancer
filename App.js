/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LakshanNav } from './Pages/JobList/JobList'
import BrowseContest, { ContestNav } from './Pages/Dinuli/BrowseContest'
import { Dashboard, DashDrawer } from './Pages/Eshan/Dashboard'




const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <DashDrawer />
    </NavigationContainer>






  );
};

const styles = StyleSheet.create({
})

export default App;

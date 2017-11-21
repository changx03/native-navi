import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Ionicons } from 'react-native-vector-icons';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import DrawerScreen from './DrawerScreen';

/**
 * Note: Ionicons only works for IOS navigation menu. 
 * In Android, use Icon instead. 
 * Full details: https://github.com/oblador/react-native-vector-icons#andoird
 */
const NavigationStack = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'iso-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'My cat',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'cat' : 'cat'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    Drawer: {
      screen: DrawerScreen,
      navigationOptions: {
        tabBarLabel: 'Custom drawer?',
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
  }
);

// backgroundColor is slightly darker than dodgerblue
const App = () => (
  <View style={{ flex: 1 }}>
    <StatusBar barStyle="light-content" backgroundColor="#176cc1" />
    <NavigationStack />
  </View>
);

export default App;

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import AsyncStorageScreen from './AsyncStorageScreen';
import AsnycStorageListScreen from './AsyncStorageListScreen';

const FirstDrawerScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>First Drawer Screen</Text>
  </View>
);

const SecondDrawerScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Second Drawer Screen</Text>
  </View>
);

const DrawerScreen = DrawerNavigator({
  FirstDrawer: {
    screen: FirstDrawerScreen,
    navigationOptions: {
      drawerLabel: 'Demo screen 1',
    },
  },
  SecondDrawer: {
    screen: SecondDrawerScreen,
    navigationOptions: {
      drawerLabel: 'Demo screen 2',
    },
  },
  AsyncStorage: {
    screen: AsyncStorageScreen,
    navigationOptions: {
      drawerLabel: 'Storage demo',
    },
  },
  StorageList: {
    screen: AsnycStorageListScreen,
    navigationOptions: {
      drawerLabel: 'Storage list demo',
    },
  },
});

export default DrawerScreen;

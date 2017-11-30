import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import AsyncStorageScreen from './AsyncStorageScreen';
import AsnycStorageListScreen from './AsyncStorageListScreen';
import LongListScreen from './LongListScreen';
import JsonTestScreen from './JsonTestScreen';
import TeamListScreen from './TeamListScreen';

const DrawerScreen = DrawerNavigator({
  FirstDrawer: {
    screen: JsonTestScreen,
    navigationOptions: {
      drawerLabel: 'Json test',
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
      drawerLabel: 'Team demo helper',
    },
  },
  LongList: {
    screen: LongListScreen,
    navigationOptions: {
      drawerLabel: 'Supler long list',
    },
  },
  TeamList: {
    screen: TeamListScreen,
    navigationOptions: {
      drawerLabel: 'My team',
    },
  },
});

export default DrawerScreen;

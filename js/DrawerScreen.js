import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

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
  },
  SecondDrawer: {
    screen: SecondDrawerScreen,
  },
});

export default DrawerScreen;

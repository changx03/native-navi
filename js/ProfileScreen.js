import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CatIcon = () => <Icon name="cat" size={40} color="dodgerblue" />;

export default class ProfileScreen extends Component {
  state = {
    btnState: 'airplane-takeoff',
  };

  _onBtnPress = () => {
    this.setState({
      btnState:
        this.state.btnState === 'airplane-takeoff'
          ? 'airplane-landing'
          : 'airplane-takeoff',
    });
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <CatIcon />
        <Text>My super awesome cat!</Text>
        <View style={{ height: 20 }} />
        <Icon.Button
          name={this.state.btnState}
          backgroundColor="dodgerblue"
          onPress={this._onBtnPress}
        >
          <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>
            {this.state.btnState === 'airplane-takeoff'
              ? 'Take off'
              : 'Landing'}
          </Text>
        </Icon.Button>
      </View>
    );
  }
}

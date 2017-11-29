import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { employeeData } from './data';

export default class JsonTestScreen extends Component {
  _onBtnPress = () => {
    try {
      console.log('employeeData.length', employeeData.length);
      console.log(employeeData[1].Name);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>
          Click the button to load json local json file.{'\n'}
          Check console log
        </Text>
        <Button title="Load json file" onPress={this._onBtnPress} />
      </View>
    );
  }
}

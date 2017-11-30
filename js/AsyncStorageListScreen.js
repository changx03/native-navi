import React, { Component } from 'react';
import {
  AsyncStorage,
  View,
  Text,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import { Button } from 'react-native-elements';
import { employeeData } from './data';

export default class AsyncStorageScreen extends Component {
  _onTeamInitPress = async () => {
    try {
      ToastAndroid.show('Adding myteam to storage...', ToastAndroid.SHORT);
      const buffer = DemoEmployees();
      console.log(buffer);
      await AsyncStorage.setItem('myteam', JSON.stringify(buffer));
      ToastAndroid.show('Done!', ToastAndroid.SHORT);
    } catch (error) {
      console.error(error);
    }
  };

  _onRemovePress = async () => {
    try {
      await AsyncStorage.removeItem('myteam');
      ToastAndroid.show('Myteam is deleted!', ToastAndroid.SHORT);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Click the button below to initialize our team.{'\n'}You only need do
          it once.
        </Text>
        <Button
          title="Team initialize"
          backgroundColor="#00e5ff"
          buttonStyle={styles.button}
          onPress={this._onTeamInitPress}
        />
        <Button
          title="Remove team"
          backgroundColor="red"
          buttonStyle={styles.button}
          onPress={this._onRemovePress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  button: {
    marginTop: 15,
  },
});

const DemoEmployees = () => {
  if (employeeData.length > 10) {
    return employeeData.slice(0, 10);
  }
};

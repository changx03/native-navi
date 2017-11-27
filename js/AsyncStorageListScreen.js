import React, { Component } from 'react';
import {
  AsyncStorage,
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';

export default class AsyncStorageScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  _onBtnPress = async () => {
    try {
      const uID123_obj1 = {
        name: 'Chris',
        age: 30,
      };
      const uID123_obj2 = {
        age: 31,
        traits: { eyes: 'blue', shoe_size: 10 },
      };

      await AsyncStorage.setItem('uID123', JSON.stringify(uID123_obj1));
      await AsyncStorage.mergeItem('uID123', JSON.stringify(uID123_obj2));
      let uID123 = await AsyncStorage.getItem('uID123');
      console.log(uID123);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this._onBtnPress} title="Show in console" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formInput: {
    height: 40,
    fontSize: 13,
    borderWidth: 1,
    borderColor: 'gray',
  },
  saved: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
    marginTop: 5,
  },
});

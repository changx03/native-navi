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
    this.state = {
      storedValue: '',
      inputValue: '',
    };
  }

  componentDidMount() {
    this._loadStorage();
  }

  _loadStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('storedValue');
      if (value != null) {
        this.setState({
          storedValue: value,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  _onChangeText = value => {
    this.setState({
      inputValue: value,
    });
  };

  _onBtnPress = async () => {
    try {
      await AsyncStorage.setItem('storedValue', this.state.inputValue);
      this._loadStorage();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.saved}>{this.state.storedValue}</Text>
        <Text style={styles.instructions}>
          Type something into the text box below. It will be saved to device
          storage. Next time you open the application, the saved data will still
          exist.
        </Text>
        <TextInput
          onChangeText={text => this._onChangeText(text)}
          style={styles.formInput}
          value={this.state.inputValue}
        />
        <Button onPress={this._onBtnPress} title="Save" />
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

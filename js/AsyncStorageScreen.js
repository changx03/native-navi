import React, { Component } from 'react';
import { AsyncStorage, View, Text, TextInput, StyleSheet } from 'react-native';

export default class AsyncStorageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myKey: '',
    };
  }

  componentDidMount() {
    this._loadStorage();
  }

  async _loadStorage() {
    try {
      const value = await AsyncStorage.getItem('myKey');
      if (value != null) {
        this.setState({
          myKey: value,
        });
      }
    } catch (error) {
      console.err(error);
    }
  }

  async _saveData(value) {
    try {
      await AsyncStorage.setItem('myKey', value);
      this.setState({
        myKey: value,
      });
    } catch (error) {
      console.err(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.saved}>{this.state.myKey}</Text>
        <Text style={styles.instructions}>
          Type something into the text box below. It will be saved to device
          storage. Next time you open the application, the saved data will still
          exist.
        </Text>
        <TextInput
          onChangeText={text => this._saveData(text)}
          style={styles.formInput}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  formInput: {
    flex: 1,
    height: 26,
    fontSize: 13,
    borderWidth: 1,
    borderColor: '#555555',
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

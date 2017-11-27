import React, { Component } from 'react';
import { AsyncStorage, View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class AsyncStorageScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  _onMergeBtnPress = async () => {
    try {
      await AsyncStorage.setItem('uID123', JSON.stringify(uID123_obj1));
      await AsyncStorage.mergeItem('uID123', JSON.stringify(uID123_obj2));
      let uID123 = await AsyncStorage.getItem('uID123');
      console.log(uID123);
      objUID123 = JSON.parse(uID123);
      console.log(objUID123.name);
    } catch (error) {
      console.error(error);
    }
  };

  _onListBtnPress = async () => {
    try {
      const multiSetPairs = [
        ['uID234', JSON.stringify(UID234_object)],
        ['uID345', JSON.stringify(UID345_object)],
      ];
      const multiMergePair = [
        ['uID234', JSON.stringify(UID234_delta)],
        ['uID345', JSON.stringify(UID345_delta)],
      ];

      await AsyncStorage.multiSet(multiSetPairs);
      await AsyncStorage.multiMerge(multiMergePair);
      let stores = await AsyncStorage.multiGet(['uID234', 'uID345']);
      let storeObj = stores.map((val, idx, stores) => {
        return JSON.parse(stores[idx][1]);
      });
      console.log(storeObj[1].name, storeObj[1].age, storeObj[1].traits);
    } catch (error) {
      console.error(error);
    }
  };

  _onUpdateBtnPress = async () => {
    const UID345_beta = {
      traits: { cloth_size: 'Small' },
    };
    try {
      await AsyncStorage.mergeItem('uID345', JSON.stringify(UID345_beta));
      let storeItem = await AsyncStorage.getItem('uID345');
      let storeObj = JSON.parse(storeItem);
      console.log(storeObj.name, storeObj.age, storeObj.traits);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this._onMergeBtnPress}
          title="Merge (see console)"
          buttonStyle={styles.button}
          backgroundColor="orangered"
        />
        <Button
          onPress={this._onListBtnPress}
          buttonStyle={styles.button}
          title="List (see console)"
          backgroundColor="paleturquoise"
        />
        <Button
          onPress={this._onUpdateBtnPress}
          buttonStyle={styles.button}
          title="Update (see console)"
          backgroundColor="paleturquoise"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginTop: 15,
  },
});

// For _onMergeBtnPress
const uID123_obj1 = {
  name: 'Chris',
  age: 30,
};
const uID123_obj2 = {
  age: 31,
  traits: { eyes: 'blue', shoe_size: 10 },
};

// first user, initial values
const UID234_object = {
  name: 'Chris',
  age: 30,
  traits: { hair: 'brown', eyes: 'brown' },
};
// first user, delta values
const UID234_delta = {
  age: 31,
  traits: { eyes: 'blue', shoe_size: 10 },
};

// second user, initial values
const UID345_object = {
  name: 'Marge',
  age: 25,
  traits: { hair: 'blonde', eyes: 'blue' },
};
// second user, delta values
const UID345_delta = {
  age: 26,
  traits: { eyes: 'green', shoe_size: 6 },
};

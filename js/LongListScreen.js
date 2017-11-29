import React, { Component } from 'react';
import {
  Button,
  FlatList,
  Platform,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import * as _ from 'lodash';
import { employeeData } from './data';

const employees = _.sortBy(employeeData, i => i.Name);

export default class SuperLongList extends Component {
  listRef;

  constructor(props) {
    super(props);
    this.state = {
      currentList: [],
    };
  }

  componentDidMount() {
    this.setState({
      currentList: employees,
    });
  }

  _keyExtractor = (item, index) => item.EmployeeID;

  _renderItem = ({ item }) => (
    <View style={{ height: 30 }}>
      <Text
        style={{ paddingHorizontal: 20, fontSize: 16 }}
        onPress={() => {
          console.log(item.EmployeeID);
        }}
      >
        {item.Name}
      </Text>
    </View>
  );

  render() {
    const Touchable =
      Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

    console.log(this.state.currentList.length);

    return (
      <View style={{ flex: 1 }}>
        <SearchBar
          lightTheme
          clearIcon
          showLoading
          containerStyle={{ backgroundColor: '#2196F3' }}
          inputStyle={{ backgroundColor: '#BBDEFB' }}
          onChangeText={text => {
            this.setState({
              currentList: employees.filter(item =>
                _.includes(item.Name, text)
              ),
            });
          }}
          onClearText={() => {
            this.setState({ currentList: employees });
          }}
          placeholder="Search..."
        />
        <FlatList
          data={this.state.currentList}
          renderItem={this._renderItem}
          ref={ref => {
            this.listRef = ref;
          }}
          keyExtractor={this._keyExtractor}
        />
        <Touchable
          accessibilityComponentType="button"
          onPress={() => {
            this.listRef.scrollToOffset({ offset: 0, animated: true });
          }}
        >
          <View
            style={{
              elevation: 4,
              backgroundColor: '#2196F3',
            }}
          >
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                padding: 8,
                fontSize: 18,
              }}
            >
              Scroll to top
            </Text>
          </View>
        </Touchable>
      </View>
    );
  }
}

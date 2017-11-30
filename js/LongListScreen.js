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
import Icon from 'react-native-vector-icons/MaterialIcons';
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
    <View
      style={{
        flex: 1,
        padding: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <Text style={{ paddingHorizontal: 10, fontSize: 15 }}>{item.Name}</Text>
        <Text style={{ paddingHorizontal: 10, fontSize: 13, color: '#616161' }}>
          {item.EmployeeID}
        </Text>
      </View>
      {item.EmployeeID % 2 === 0
        ? this._renderTickBtn(item)
        : this._renderRemoveBtn(item)}
    </View>
  );

  _renderSeparator = () => (
    <View
      style={{
        height: 1,
        width: '90%',
        backgroundColor: '#CED0CE',
        marginHorizontal: '5%',
      }}
    />
  );

  _renderTickBtn = item => (
    <View>
      <Icon
        name="done"
        color="dodgerblue"
        onPress={() => {
          this._onListItemBtnPress(item);
        }}
        size={30}
      />
    </View>
  );

  _renderRemoveBtn = item => (
    <View>
      <Icon
        name="clear"
        color="orangered"
        onPress={() => {
          this._onListItemBtnPress(item);
        }}
        size={30}
      />
    </View>
  );

  _onListItemBtnPress = item => {
    console.log(item.EmployeeID);
  };

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
                _.includes(item.Name + item.EmployeeID.toString(), text)
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
          ItemSeparatorComponent={this._renderSeparator}
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

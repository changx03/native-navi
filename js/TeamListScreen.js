import React, { Component } from 'react';
import {
  AsyncStorage,
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
import { ListItem } from './ListItem';

export default class TeamListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamList: [],
    };
  }

  componentDidMount() {
    this._loadTeam();
  }

  _loadTeam = async () => {
    try {
      const json = await AsyncStorage.getItem('myteam');
      if (json != null) {
        this.setState({
          teamList: JSON.parse(json),
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  _keyExtractor = (item, index) => item.EmployeeID;

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

  _handleRemove = item => {
    try {
      this.setState((prevState, props) => {
        return {
          teamList: prevState.teamList.filter(
            i => i.EmployeeID !== props.item.EmployeeID
          ),
        };
      });
      AsyncStorage.setItem('myteam', JSON.stringify(this.state.teamList));
    } catch (error) {
      console.error(error);
    }
  };

  _onSearchTxtChange = text => {
    this.setState((prevState, props) => {
      return {
        teamList: prevState.teamList.filter(item =>
          _.includes(item.Name + item.EmployeeID.toString(), props.text)
        ),
      };
    });
  };

  _onSearchClear = async () => {
    try {
      const json = await AsyncStorage.getItem('myteam');
      if (json != null) {
        this.setState({
          teamList: JSON.parse(json),
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  _renderItem = ({ item }) => (
    <ListItem item={item} onRemove={this._handleRemove} />
  );

  render() {
    const Touchable =
      Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

    console.log(this.state.teamList);

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.teamList}
          renderItem={this._renderItem}
          ref={ref => {
            this.listRef = ref;
          }}
          keyExtractor={this._keyExtractor}
          ItemSeparatorComponent={this._renderSeparator}
          ListHeaderComponent={
            <SearchBar
              lightTheme
              clearIcon
              showLoading
              containerStyle={{ backgroundColor: '#2196F3' }}
              inputStyle={{ backgroundColor: '#BBDEFB' }}
              onChangeText={this._onSearchTxtChange}
              onClearText={this._onSearchClear}
              placeholder="Search..."
            />
          }
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

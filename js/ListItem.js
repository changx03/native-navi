import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export class ListItem extends Component {
  componentWillMount() {}

  _renderRemoveBtn = () => (
    <View>
      <Icon
        name="clear"
        color="orangered"
        onPress={this.props.onRemove}
        size={30}
      />
    </View>
  );

  render() {
    const { item } = this.props;

    return (
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
          <Text style={{ paddingHorizontal: 10, fontSize: 15 }}>
            {item.Name}
          </Text>
          <Text
            style={{ paddingHorizontal: 10, fontSize: 13, color: '#616161' }}
          >
            {item.EmployeeID}
          </Text>
        </View>
        {this._renderRemoveBtn(item)}
      </View>
    );
  }
}

import React, {Component} from 'react';
import {Text, View} from 'react-native';
// import Style from './Style';

export default class InputButton extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#91AA9D'
      }}>
        <Text style={{
          fontSize: 22,
          fontWeight: 'bold',
          color: 'white'
        }}>{this.props.value}</Text>
      </View>
    )
  }
}

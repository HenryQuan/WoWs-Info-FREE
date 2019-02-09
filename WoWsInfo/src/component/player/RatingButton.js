/**
 * RatingButton.js
 * 
 * 
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class RatingButton extends Component {
  render() {
    const { container } = styles;
    return (
      <View style={container}>
        <Text>RatingButton</Text>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export { RatingButton };

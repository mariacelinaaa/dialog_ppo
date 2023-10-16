import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
const icon = require('../assets/images/dialog_icon.png');

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image
        source={icon} // 'contentMode' foi substituído por 'resizeMode'
      />
      <Text style={styles.text}>Dialog</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    // fontFamily: 'Lusitana',
    color: '#000',
    fontSize: 22,
  },
});

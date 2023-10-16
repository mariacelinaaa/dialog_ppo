import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function Button(props) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={styles.primaryButton} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: '#7D0062',
    height: 44,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

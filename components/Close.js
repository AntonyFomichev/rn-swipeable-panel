import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export const Close = ({ onPress, rootStyle, iconStyle }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={[CloseStyles.closeButton, rootStyle]}
    >
      <View
        style={[
          CloseStyles.iconLine,
          iconStyle,
          { transform: [{ rotateZ: '45deg' }] }
        ]}
      />
      <View
        style={[
          CloseStyles.iconLine,
          iconStyle,
          { transform: [{ rotateZ: '135deg' }] }
        ]}
      />
    </TouchableOpacity>
  );
};

const CloseStyles = StyleSheet.create({
  closeButton: {
    width: 24,
    height: 24,
    borderRadius: 24,
    position: 'absolute',
    right: 20,
    top: 28,
    backgroundColor: '#BBC1CE',
    zIndex: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconLine: {
    position: 'absolute',
    width: 18,
    height: 2,
    borderRadius: 2,
    backgroundColor: 'white'
  }
});

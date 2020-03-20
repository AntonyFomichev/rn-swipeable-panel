import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export const Bar = ({ barStyle, alternateBar }) => {
  return (
    <View style={BarStyles.barContainer}>
      {alternateBar ? (
        <Image source={require('./LineDown.png')} style={BarStyles.image} />
      ) : (
        <View style={[BarStyles.bar, barStyle]} />
      )}
    </View>
  );
};

const BarStyles = StyleSheet.create({
  barContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bar: {
    width: 22,
    height: 4,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#E2E7E9'
  },
  image: {
    width: 27,
    height: 6,
    marginVertical: 10,
    resizeMode: 'cover'
  }
});

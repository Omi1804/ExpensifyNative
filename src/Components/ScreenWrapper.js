import {Platform, StatusBar, Text, View} from 'react-native';
import React from 'react';

const ScreenWrapper = ({children}) => {
  let statusBarHeight =
    Platform.OS === 'ios'
      ? StatusBar.currentHeight
        ? StatusBar.currentHeight
        : 30
      : 0;

  return (
    <View style={{paddingTop: statusBarHeight}}>
      {children}
      <Text>{statusBarHeight}</Text>
    </View>
  );
};

export default ScreenWrapper;

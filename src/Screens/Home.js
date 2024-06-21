import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../Components/ScreenWrapper';

const Home = () => {
  return (
    <ScreenWrapper>
      <Text className="text-red-500">Hello from home</Text>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({});

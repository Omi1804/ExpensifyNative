import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import ScreenWrapper from '../Components/ScreenWrapper';
import {colors} from '../theme';
import {useNavigation} from '@react-navigation/native';

const WelcomScreen = () => {
  const navigation = useNavigation();
  return (
    <ScreenWrapper>
      <View className="h-full flex justify-around">
        <View className="flex-row justify-center mt-10">
          <Image
            source={require('../../assets/welcome.gif')}
            className="h-96 w-96 shadow"
          />
        </View>
        <View className="mx-5 mb-20">
          <Text
            className={`${colors.heading} text-center font-bold text-4xl mb-10`}>
            Expensify
          </Text>
          <TouchableOpacity
            style={{backgroundColor: colors.button}}
            onPress={() => navigation.navigate('SignIn')}
            className="shadow p-3 rounded-full mb-5">
            <Text className="text-center text-white text-lg font-bold">
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: colors.button}}
            onPress={() => navigation.navigate('SignUp')}
            className="shadow p-3 rounded-full">
            <Text className="text-center text-white text-lg font-bold">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default WelcomScreen;

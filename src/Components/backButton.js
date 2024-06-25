import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {SparklesIcon as SparklesIconMicro} from 'react-native-heroicons/micro';
import {colors} from '../theme';
import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="bg-white rounded-full h-8 w-8 flex justify-center items-center"
      onPress={() => navigation.goBack()}>
      <ChevronLeftIcon size={25} color={`${colors.button}`} />
    </TouchableOpacity>
  );
};

export default BackButton;

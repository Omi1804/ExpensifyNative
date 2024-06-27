import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../Components/ScreenWrapper';
import {colors} from '../theme';
import randomImage from '../../assets/randomImage';
import EmptyList from '../Components/emptyList';
import {useNavigation} from '@react-navigation/native';
import BackButton from '../Components/backButton';
import ExpenseCard from '../Components/expenseCard';

let items = [
  {id: 1, title: 'ate sandwich', amount: 4, category: 'food'},
  {id: 2, title: 'ate sandwich', amount: 4, category: 'food'},
  {id: 3, title: 'ate sandwich', amount: 4, category: 'food'},
];

const TripExpensesScreen = props => {
  const {id, place, country} = props.route.params;
  const navigation = useNavigation();
  return (
    <ScreenWrapper className="flex-1">
      <View className="px-4">
        <View className="relative mt-5">
          <View className="absolute top-0 left-0 z-50">
            <BackButton />
          </View>
          <View>
            <Text className={`${colors.heading} text-xl font-bold text-center`}>
              {place}
            </Text>
            <Text className={`${colors.heading} text-xs  text-center`}>
              {country}
            </Text>
          </View>
        </View>
        <View className="flex-row justify-center items-center rounded-xl mb-4">
          <Image source={require('../../assets/7.png')} className="w-80 h-80" />
        </View>
        <View className="space-y-4">
          <View className="flex-row justify-between items-center">
            <Text className={`${colors.heading} font-bold text-xl`}>
              Expenses
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddExpense')}
              className="p-2 px-3 bg-white border border-gray-200 rounded-full">
              <Text className={colors.heading}>Add Expense</Text>
            </TouchableOpacity>
          </View>
          <View style={{height: 430}}>
            <FlatList
              data={items}
              ListEmptyComponent={
                <EmptyList message={"You haven't recorded any expenses yet"} />
              }
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              className="mx-1 "
              renderItem={({item}) => {
                return <ExpenseCard item={item} />;
              }}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default TripExpensesScreen;
